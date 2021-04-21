import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import {
  Attachment as AttachmentIcon,
  AlternateEmail as AlternateEmailIcon,
  SentimentSatisfiedRounded as SentimentSatisfiedRoundedIcon,
  VideoLabel as VideoLabelIcon,
} from '@material-ui/icons';

// Edit this code later
import { AddComment } from './AddComment';
import { IComment, IBoard, getCommentsWithDetails } from '../../../utils';

import {
  StyledWrapper,
  StyledComment,
  StyledCommentEditor,
  StyledBtnContainer,
  StyledAvatar,
  StyledTextField,
  StyledSaveButton,
  StyledIconButton,
  StyledIconBtnContainer,
} from './Comments.styles';

interface IProps {
  comments: IComment[];
}

interface IRouteParams {
  boardId: string;
}

const iconBtnList = [
  { icon: <AttachmentIcon className="md-icon" /> },
  { icon: <AlternateEmailIcon className="sm-icon" /> },
  { icon: <SentimentSatisfiedRoundedIcon className="sm-icon" /> },
  { icon: <VideoLabelIcon className="sm-icon" /> },
];

const Comments: React.FC<IProps> = ({ comments }) => {
  const [isEditingComment, setIsEditingComment] = useState(false);
  const { boardId } = useParams<IRouteParams>();

  const queryClient = useQueryClient();
  const { owners, members } = queryClient.getQueryData<IBoard>([
    'board',
    boardId,
  ])!;
  const users = [...owners, ...members];
  const commentsDetailedList = getCommentsWithDetails(comments, users);

  return (
    <>
      <AddComment />
      {commentsDetailedList.map(
        ({ commentId, author, createdAt, commentText }) => (
          <StyledWrapper key={commentId}>
            <StyledAvatar>{author.avatarName}</StyledAvatar>
            <StyledComment>
              <div>
                <span>{author.username}</span>
                <span>{createdAt}</span>
              </div>
              <div>{commentText}</div>
            </StyledComment>
            {isEditingComment && (
              <StyledCommentEditor>
                <StyledTextField
                  onFocus={() => setIsEditingComment(true)}
                  multiline
                  variant="outlined"
                  isWriting={isEditingComment}
                />
                <StyledBtnContainer>
                  <StyledSaveButton>Save</StyledSaveButton>
                  <StyledIconBtnContainer>
                    {iconBtnList.map(({ icon }) => (
                      <StyledIconButton key={uuidv4()}>{icon}</StyledIconButton>
                    ))}
                  </StyledIconBtnContainer>
                </StyledBtnContainer>
              </StyledCommentEditor>
            )}
          </StyledWrapper>
        )
      )}
    </>
  );
};

export default Comments;
