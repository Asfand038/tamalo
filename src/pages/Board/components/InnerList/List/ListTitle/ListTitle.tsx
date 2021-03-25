import React, { useState } from 'react';
import { DraggableProvided } from 'react-beautiful-dnd';
import { MoreHoriz as MoreHorizIcon } from '@material-ui/icons';

import {
  StyledListTitle,
  StyledListTitleWrapper,
  StyledListTitleInput,
} from './ListTitle.styles';

interface IProps {
  provided: DraggableProvided;
  title: string;
}

const ListTitle: React.FC<IProps> = ({ provided, title }) => {
  const [listTitle, setListTitle] = useState(title);
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  return (
    <StyledListTitleWrapper>
      {!isEditingTitle && (
        <StyledListTitle
          onClick={() => setIsEditingTitle(true)}
          {...provided.dragHandleProps}
        >
          {title}
        </StyledListTitle>
      )}
      {isEditingTitle && (
        <StyledListTitleInput
          variant="outlined"
          value={listTitle}
          multiline
          rowsMax="12"
          onChange={(e) => setListTitle(e.target.value)}
          autoFocus
          onFocus={(e) => e.target.select()}
          onBlur={() => setIsEditingTitle(false)}
        />
      )}
      <span>
        <MoreHorizIcon />
      </span>
    </StyledListTitleWrapper>
  );
};

export default ListTitle;
