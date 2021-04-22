import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { v4 as uuidv4 } from 'uuid';
import { Popover, Paper } from '@material-ui/core';
import {
  Attachment as AttachmentIcon,
  AlternateEmail as AlternateEmailIcon,
  SentimentSatisfiedRounded as SentimentSatisfiedRoundedIcon,
  VideoLabel as VideoLabelIcon,
  SentimentSatisfiedOutlined as SentimentSatisfiedOutlinedIcon,
  Close as CloseIcon,
} from '@material-ui/icons';

import { updateOneComment, deleteOneComment } from '../../../../api';
import {
  ITaskDetails,
  IComment,
  optimisticUpdateMutationConfig,
} from '../../../../utils';
import { getAvatarFallbackName } from '../../../../../../utils';
import { ButtonContainer, Loader } from '../../../../../../components';
import {
  StyledWrapper,
  StyledComment,
  StyledCommentText,
  StyledCommentDetails,
  StyledCommentEditor,
  StyledBtnContainer,
  StyledCommentUpdateBtns,
  StyledLoaderWrapper,
  StyledDeletePopup,
  StyledDeleteButton,
  StyledCloseIconButton,
} from './Comment.styles';
import {
  StyledAvatar,
  StyledTextField,
  StyledIconButton,
  StyledIconBtnContainer,
} from '../Comments.styles';

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
  const { comments } = taskData;

  const { mutate: updateComment } = useMutation(
    () => updateOneComment(commentId, commentTextState, author, comments),
    optimisticUpdateMutationConfig(taskId, queryClient)
  );

  const { mutate: deleteComment } = useMutation(
    () => deleteOneComment(commentId, author, comments),
    optimisticUpdateMutationConfig(taskId, queryClient)
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
                  aria-describedby={anchorEl ? 'delete-popover' : undefined}
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                >
                  Delete
                </button>
                <Paper>
                  <Popover
                    id={anchorEl ? 'delete-popover' : undefined}
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={() => setAnchorEl(null)}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                  >
                    <StyledDeletePopup>
                      <div>
                        <span>Delete Comment?</span>
                        <StyledCloseIconButton
                          onClick={() => setAnchorEl(null)}
                        >
                          <CloseIcon />
                        </StyledCloseIconButton>
                      </div>
                      <div>
                        <p>Deleting a comment is forever. There is no undo.</p>
                        <StyledDeleteButton
                          variant="contained"
                          fullWidth
                          onClick={deleteCommentHandler}
                        >
                          Delete comment
                        </StyledDeleteButton>
                      </div>
                    </StyledDeletePopup>
                  </Popover>
                </Paper>
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
