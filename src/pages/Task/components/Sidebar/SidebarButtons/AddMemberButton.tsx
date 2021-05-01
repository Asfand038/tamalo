import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@material-ui/core';
import {
  PersonOutlineRounded as PersonOutlineRoundedIcon,
  Done as DoneIcon,
} from '@material-ui/icons';

import { PopOver, ErrorAlert } from '../../../../../components';
import {
  ITaskDetails,
  IUser,
  taskMutationConfig,
  taskMutationKeys,
} from '../../../utils';
import { updateTaskMembers } from '../../../api';
import { errorMessages, getAvatarFallbackName } from '../../../../../utils';
import { StyledAvatar } from '../../../Task.styles';
import { StyledListButton } from '../Sidebar.styles';

const StyledPopOverContent = styled.div`
  padding: 0 12px 12px;
  & > div:first-child {
    color: ${({ theme }) => theme.colors.neutral[550]};
    font-size: ${({ theme }) => theme.typeScale.subtitle};
    font-weight: 500;
    margin-bottom: 10px;
    letter-spacing: 0.5px;
    word-spacing: 2px;
  }
`;

const StyledPopOverButton = styled(Button)`
  && {
    box-shadow: none;
    margin-bottom: 8px;
    padding: 4px;
    height: 40px;
    justify-content: flex-start;
    text-transform: none;
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.blue[400]};
    & div {
      margin: 4px 8px 4px 0;
    }
    & > span {
      position: relative;
    }
    & svg {
      position: absolute;
      right: 11px;
      font-size: ${({ theme }) => theme.typeScale.paragraph};
      color: ${({ theme }) => theme.colors.blue[300]};
    }
  }
`;

interface IRouteParams {
  boardId: string;
  taskId: string;
}

interface IDetails extends IUser {
  isMember: boolean;
}

interface IPopOverButton {
  taskMembers: IUser[] | [];
  boardMembers: IUser[];
  member: IDetails;
}

const PopOverButton: React.FC<IPopOverButton> = ({
  taskMembers,
  boardMembers,
  member,
}) => {
  const { taskId } = useParams<IRouteParams>();
  const queryClient = useQueryClient();
  const taskData = queryClient.getQueryData<ITaskDetails>(['task', taskId])!;

  const { mutate: updateMembers, error } = useMutation(
    () => updateTaskMembers(member.id, taskId, taskMembers, boardMembers),
    taskMutationConfig(taskId, queryClient, {
      key: taskMutationKeys.updateMembers,
    })
  );

  const updateTaskMembersHandler = (userId: string, isMember: boolean) => {
    if (isMember) {
      const updatedMembers = taskData.members.filter(
        (member) => member.id !== userId
      );
      updateMembers({ ...taskData, members: updatedMembers });
    } else {
      const newMember = boardMembers.find((member) => member.id === userId)!;
      updateMembers({ ...taskData, members: [...taskData.members, newMember] });
    }
  };

  return (
    <>
      {error && <ErrorAlert message={errorMessages.updateTaskMembers} />}
      <StyledPopOverButton
        fullWidth
        onClick={() => updateTaskMembersHandler(member.id, member.isMember)}
      >
        <StyledAvatar src={member.profileImg}>
          {getAvatarFallbackName(member.username)}
        </StyledAvatar>
        <span>{member.username}</span>
        {member.isMember && <DoneIcon />}
      </StyledPopOverButton>
    </>
  );
};

interface IProps {
  taskMembers: IUser[] | [];
  boardMembers: IUser[];
}

const AddMemberButton: React.FC<IProps> = ({ taskMembers, boardMembers }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  let boardMembersList = boardMembers.map((member) => ({
    ...member,
    isMember: false,
  }));

  if (taskMembers.length) {
    boardMembersList = boardMembers.map((member) => {
      const idsList = taskMembers.map((member: IUser) => member.id);
      if (idsList.includes(member.id)) {
        return { ...member, isMember: true };
      }
      return { ...member, isMember: false };
    });
  }

  return (
    <>
      <StyledListButton
        variant="contained"
        startIcon={<PersonOutlineRoundedIcon />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Members
      </StyledListButton>
      <PopOver
        headingText="Members"
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      >
        <StyledPopOverContent>
          <div>BOARD MEMBERS</div>
          {boardMembersList.map((member) => (
            <PopOverButton
              key={uuidv4()}
              member={member}
              taskMembers={taskMembers}
              boardMembers={boardMembers}
            />
          ))}
        </StyledPopOverContent>
      </PopOver>
    </>
  );
};

export default AddMemberButton;
