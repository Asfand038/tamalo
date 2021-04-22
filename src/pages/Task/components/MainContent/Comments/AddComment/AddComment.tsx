import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { ClickAwayListener } from '@material-ui/core';
import {
  Attachment as AttachmentIcon,
  AlternateEmail as AlternateEmailIcon,
  SentimentSatisfiedRounded as SentimentSatisfiedRoundedIcon,
  VideoLabel as VideoLabelIcon,
} from '@material-ui/icons';

import { useAuth } from '../../../../../../contexts';
import { getAvatarFallbackName } from '../../../../../../utils';
import { addOneComment } from '../../../../api';
import { IComment, ITaskDetails } from '../../../../utils';
import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledIconBtnContainer,
  StyledIconButton,
  StyledSaveButton,
  StyledTextField,
  StyledAvatar,
} from '../Comments.styles';

const StyledWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const iconBtnList = [
  { icon: <AttachmentIcon className="md-icon" /> },
  { icon: <AlternateEmailIcon className="sm-icon" /> },
  { icon: <SentimentSatisfiedRoundedIcon className="sm-icon" /> },
  { icon: <VideoLabelIcon className="sm-icon" /> },
];

interface IRouteParams {
  taskId: string;
}

const AddComment: React.FC = () => {
  const [isWritingComment, setIsWritingComment] = useState(false);
  const [newCommentText, setNewCommentText] = useState('');

  const { user } = useAuth();
  const { taskId } = useParams<IRouteParams>();
  const queryClient = useQueryClient();
  const taskData = queryClient.getQueryData<ITaskDetails>(['task', taskId])!;
  const { comments } = taskData;

  const { mutate: addComment } = useMutation(
    () => addOneComment(newCommentText, user, taskId, comments),
    {
      onMutate: async (updatedTask: ITaskDetails) => {
        await queryClient.cancelQueries(['task', taskId]);
        const previousTask = queryClient.getQueryData<ITaskDetails>([
          'task',
          taskId,
        ]);
        queryClient.setQueryData<ITaskDetails>(['task', taskId], updatedTask);

        return { previousTask, updatedTask };
      },

      onError: (
        error: any,
        variables: ITaskDetails,
        context:
          | {
              previousTask: ITaskDetails | undefined;
              updatedTask: ITaskDetails;
            }
          | undefined
      ) => {
        if (context?.previousTask) {
          queryClient.setQueryData('task', context.previousTask);
        }
      },

      onSettled: () => {
        queryClient.invalidateQueries(['task', taskId]);
      },
    }
  );

  const addCommentHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (newCommentText && newCommentText.length) {
      const newComment: IComment = {
        commentId: `optimistic${uuidv4()}`,
        commentText: newCommentText,
        createdAt: '',
        updatedAt: '',
        taskId,
        author: user,
      };
      const newCommentsList = [newComment, ...taskData.comments];
      addComment({ ...taskData, comments: newCommentsList });
      setNewCommentText('');
      setIsWritingComment(false);
    }
  };

  const SaveButton = () => (
    <StyledSaveButton
      onClick={addCommentHandler}
      disabled={newCommentText.length === 0}
    >
      Save
    </StyledSaveButton>
  );

  return (
    <StyledWrapper>
      <StyledAvatar src={user.profileImg}>
        {getAvatarFallbackName(user.username)}
      </StyledAvatar>
      <ClickAwayListener onClickAway={() => setIsWritingComment(false)}>
        <StyledAccordion expanded={isWritingComment}>
          <StyledAccordionSummary iswriting={+isWritingComment}>
            <StyledTextField
              onFocus={() => setIsWritingComment(true)}
              multiline
              variant="outlined"
              placeholder="Write a comment..."
              iswriting={+isWritingComment}
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
            />
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            {!newCommentText.length && (
              <div className="cursor-not-allowed-wrapper">
                <SaveButton />
              </div>
            )}
            {newCommentText.length > 0 && <SaveButton />}
            <StyledIconBtnContainer>
              {iconBtnList.map(({ icon }) => (
                <StyledIconButton key={uuidv4()}>{icon}</StyledIconButton>
              ))}
            </StyledIconBtnContainer>
          </StyledAccordionDetails>
        </StyledAccordion>
      </ClickAwayListener>
    </StyledWrapper>
  );
};

export default AddComment;
