import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { v4 as uuidv4 } from 'uuid';
import {
  PersonOutlineRounded as PersonOutlineRoundedIcon,
  Done as DoneIcon,
} from '@material-ui/icons';

import { PopOver } from '../../../../../components';
import {
  ITaskDetails,
  IUser,
  taskMutationConfig,
  taskMutationKeys,
} from '../../../utils';
import { updateTaskMembers } from '../../../api';
import { getAvatarFallbackName } from '../../../../../utils';
import {
  StyledAddMemberButton,
  StyledPopOverButton,
  StyledPopOverContent,
} from './AddMemberButton.styles';
import { StyledAvatar } from '../../../Task.styles';

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

  const { mutate: updateMembers } = useMutation(
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
      <StyledAddMemberButton
        variant="contained"
        startIcon={<PersonOutlineRoundedIcon />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Members
      </StyledAddMemberButton>
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
