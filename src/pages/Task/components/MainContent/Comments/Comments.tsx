import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';

// Edit this code later
import { IComment, IBoard, getCommentsWithDetails } from '../../../utils';
import { iconBtnList } from '../Activity/Activity';
import {
  StyledAvatar,
  StyledTextField,
  StyledSaveButton,
  StyledIconButton,
  StyledIconBtnContainer,
} from '../Activity/Activity.styles';
import {
  StyledWrapper,
  StyledComment,
  StyledCommentEditor,
  StyledBtnContainer,
} from './Comments.styles';

interface IProps {
  comments: IComment[];
}

interface IRouteParams {
  boardId: string;
}

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
