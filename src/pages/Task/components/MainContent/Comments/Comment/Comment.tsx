import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { v4 as uuidv4 } from 'uuid';
import {
  Attachment as AttachmentIcon,
  AlternateEmail as AlternateEmailIcon,
  SentimentSatisfiedRounded as SentimentSatisfiedRoundedIcon,
  VideoLabel as VideoLabelIcon,
  SentimentSatisfiedOutlined as SentimentSatisfiedOutlinedIcon,
} from '@material-ui/icons';

import { updateOneComment, deleteOneComment } from '../../../../api';
import {
  ITaskDetails,
  IComment,
  taskMutationConfig,
  taskMutationKeys,
} from '../../../../utils';
import { getAvatarFallbackName } from '../../../../../../utils';
import { ButtonContainer, Loader, PopOver } from '../../../../../../components';
import {
  StyledWrapper,
  StyledComment,
  StyledCommentText,
  StyledCommentDetails,
  StyledCommentEditor,
  StyledBtnContainer,
  StyledCommentUpdateBtns,
  StyledLoaderWrapper,
} from './Comment.styles';
import {
  StyledTextField,
  StyledIconButton,
  StyledIconBtnContainer,
} from '../Comments.styles';
import {
  StyledAvatar,
  StyledDeleteButton,
  StyledDeletePopOverContent,
} from '../../../../Task.styles';

const iconBtnList = [
  { icon: <AttachmentIcon className="md-icon" /> },
  { icon: <AlternateEmailIcon className="sm-icon" /> },
  { icon: <SentimentSatisfiedRoundedIcon className="sm-icon" /> },
  { icon: <VideoLabelIcon className="sm-icon" /> },
];

interface IProps {
  comment: IComment;
}

const Comment: React.FC<IProps> = ({ comment }) => {
  const { author, createdAt, commentText, commentId, taskId } = comment;

  const [isEditingComment, setIsEditingComment] = useState(false);
  const [commentTextState, setCommentTextState] = useState(commentText);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const queryClient = useQueryClient();
  const taskData = queryClient.getQueryData<ITaskDetails>(['task', taskId])!;
  const { comments, cover } = taskData;

  const { mutate: updateComment } = useMutation(
    () =>
      updateOneComment(commentId, commentTextState, author, comments, cover),
    taskMutationConfig(taskId, queryClient, {
      key: taskMutationKeys.editComment,
    })
  );

  const { mutate: deleteComment } = useMutation(
    () => deleteOneComment(commentId, author, comments, cover),
    taskMutationConfig(taskId, queryClient, {
      key: taskMutationKeys.deleteComment,
    })
  );

  const editCommentHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const updatedCommentsList = comments.map((el) => {
      if (el.commentId === commentId) {
        return { ...el, commentText: commentTextState };
      }
      return el;
    });
    updateComment({ ...taskData, comments: updatedCommentsList });
    setIsEditingComment(false);
  };

  const deleteCommentHandler = () => {
    const updatedCommentsList = comments.filter(
      (el) => el.commentId !== commentId
    );
    deleteComment({ ...taskData, comments: updatedCommentsList });
    setAnchorEl(null);
  };

  return (
    <StyledWrapper>
      <StyledAvatar src={author.profileImg}>
        {getAvatarFallbackName(author.username)}
      </StyledAvatar>
      <StyledComment>
        <StyledCommentDetails>
          <span>{author.username}</span>
          <span>{createdAt}</span>
        </StyledCommentDetails>
        {!isEditingComment && commentId.includes('optimistic') && (
          <>
            <StyledCommentText>{commentText}</StyledCommentText>
            <StyledLoaderWrapper>
              <Loader color="#737581" />
              <div>Sending...</div>
            </StyledLoaderWrapper>
          </>
        )}
        {!isEditingComment && !commentId.includes('optimistic') && (
          <>
            <StyledCommentText>{commentText}</StyledCommentText>
            <StyledCommentUpdateBtns>
              <SentimentSatisfiedOutlinedIcon />
              <div>
                <span> - </span>
                <button onClick={() => setIsEditingComment(true)} type="button">
                  Edit
                </button>
                <span> - </span>
                <button
                  type="button"
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                >
                  Delete
                </button>
                <PopOver
                  headingText="Delete comment?"
                  anchorEl={anchorEl}
                  setAnchorEl={setAnchorEl}
                >
                  <StyledDeletePopOverContent>
                    <p>Deleting a comment is forever. There is no undo.</p>
                    <StyledDeleteButton
                      variant="contained"
                      fullWidth
                      onClick={deleteCommentHandler}
                    >
                      Delete comment
                    </StyledDeleteButton>
                  </StyledDeletePopOverContent>
                </PopOver>
              </div>
            </StyledCommentUpdateBtns>
          </>
        )}
        {isEditingComment && (
          <StyledCommentEditor onSubmit={editCommentHandler}>
            <StyledTextField
              multiline
              variant="outlined"
              value={commentTextState}
              onChange={(e) => setCommentTextState(e.target.value)}
              onFocus={(e) => e.target.select()}
              iswriting={+isEditingComment}
              autoFocus
            />
            <StyledBtnContainer
              isTextFieldEmpty={commentTextState.length === 0}
            >
              <ButtonContainer
                btnText="Save"
                setFormIsOpen={setIsEditingComment}
              />
              <StyledIconBtnContainer>
                {iconBtnList.map(({ icon }) => (
                  <StyledIconButton key={uuidv4()}>{icon}</StyledIconButton>
                ))}
              </StyledIconBtnContainer>
            </StyledBtnContainer>
          </StyledCommentEditor>
        )}
      </StyledComment>
    </StyledWrapper>
  );
};

export default Comment;
