import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  ListRounded as ListRoundedIcon,
  Add as AddIcon,
} from '@material-ui/icons';

import { Comments } from './Comments';
import { AddDescription } from './AddDescription';
import { IComment, IUser } from '../../utils';
import { getAvatarFallbackName } from '../../../../utils';

import {
  StyledContainer,
  StyledTasksDetailsContainer,
  StyledTaskDetailItem,
  StyledAddMemberButton,
  StyledTitleContainer,
  StyledTitle,
  StyledButton,
  StyledIcon,
  StyledActivityContainer,
} from './MainContent.styles';
import { StyledAvatar } from '../../Task.styles';

interface IProps {
  comments: IComment[];
  dueDate: string | undefined;
  taskMembers: [] | IUser[];
}

const MainContent: React.FC<IProps> = ({ comments, dueDate, taskMembers }) => {
  return (
    <StyledContainer>
      <StyledTasksDetailsContainer>
        {Boolean(taskMembers.length) && (
          <StyledTaskDetailItem>
            <div>MEMBERS</div>
            <div>
              {taskMembers.map((member: IUser) => (
                <StyledAvatar key={uuidv4()} src={member.profileImg}>
                  {getAvatarFallbackName(member.username)}
                </StyledAvatar>
              ))}
              <StyledAddMemberButton>
                <AddIcon />
              </StyledAddMemberButton>
            </div>
          </StyledTaskDetailItem>
        )}
        {dueDate && (
          <StyledTaskDetailItem>
            <div>DUE DATE</div>
            <StyledButton>{dueDate}</StyledButton>
          </StyledTaskDetailItem>
        )}
      </StyledTasksDetailsContainer>
      <AddDescription />
      <StyledActivityContainer>
        <StyledTitleContainer>
          <StyledIcon component={<ListRoundedIcon />} />
          <StyledTitle>Activity</StyledTitle>
          <StyledButton>Show details</StyledButton>
        </StyledTitleContainer>
      </StyledActivityContainer>
      <Comments comments={comments} />
    </StyledContainer>
  );
};

export default MainContent;
