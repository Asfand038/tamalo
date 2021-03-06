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

import { ErrorAlert } from '../../../../../../components';
import { useAuth } from '../../../../../../contexts';
import { getAvatarFallbackName, errorMessages } from '../../../../../../utils';
import { addOneComment } from '../../../../api';
import {
  IBoard,
  IComment,
  ITaskDetails,
  taskMutationConfig,
  taskMutationKeys,
} from '../../../../utils';
import { StyledAvatar } from '../../../../Task.styles';
import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledIconBtnContainer,
  StyledIconButton,
  StyledSaveButton,
  StyledTextField,
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
  boardId: string;
  taskId: string;
}

const AddComment: React.FC = () => {
  const [isWritingComment, setIsWritingComment] = useState(false);
  const [newCommentText, setNewCommentText] = useState('');
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const { taskId, boardId } = useParams<IRouteParams>();

  const taskData = queryClient.getQueryData<ITaskDetails>(['task', taskId])!;
  const boardData = queryClient.getQueryData<IBoard>(['board', boardId])!;
  const { owners, members } = boardData;
  const users = [...owners, ...members];
  const { comments, cover } = taskData;

  const { mutate: addComment, error } = useMutation(
    () => addOneComment(newCommentText, user, taskId, comments, cover, users),
    taskMutationConfig(taskId, queryClient, {
      key: taskMutationKeys.addComment,
    })
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
      {error && <ErrorAlert message={errorMessages.addComment} />}
      <StyledAvatar src={user.profileImg}>
        {getAvatarFallbackName(`${user.firstName} ${user.lastName}`)}
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
              <div className="not-allowed">
                <SaveButton />
              </div>
            )}
            {Boolean(newCommentText.length) && <SaveButton />}
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
