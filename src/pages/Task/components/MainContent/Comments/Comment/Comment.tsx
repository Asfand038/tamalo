import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Attachment as AttachmentIcon,
  AlternateEmail as AlternateEmailIcon,
  SentimentSatisfiedRounded as SentimentSatisfiedRoundedIcon,
  VideoLabel as VideoLabelIcon,
  SentimentSatisfiedOutlined as SentimentSatisfiedOutlinedIcon,
} from '@material-ui/icons';

import { ButtonContainer, Loader } from '../../../../../../components';
import { IComment } from '../../../../utils';
import { getAvatarFallbackName } from '../../../../../../utils';
import {
  StyledWrapper,
  StyledComment,
  StyledCommentText,
  StyledCommentDetails,
  StyledCommentEditor,
  StyledBtnContainer,
  StyledCommentUpdateBtns,
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
  const { author, createdAt, commentText, commentId } = comment;

  const [isEditingComment, setIsEditingComment] = useState(false);
  const [commentTextState, setCommentTextState] = useState(commentText);

  const editCommentHandler = () => {};
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
        {!isEditingComment && (
          <>
            <StyledCommentText>{commentText}</StyledCommentText>
            {commentId.includes('optimistic') && (
              <div>
                <Loader />
              </div>
            )}
            <StyledCommentUpdateBtns>
              <SentimentSatisfiedOutlinedIcon />
              <div>
                <span> - </span>
                <span
                  role="button"
                  onClick={() => setIsEditingComment(true)}
                  aria-hidden="true"
                >
                  Edit
                </span>
                <span> - </span>
                <span>Delete</span>
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
            <StyledBtnContainer>
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
