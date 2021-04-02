import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { useQueryClient, useMutation } from 'react-query';
import { ClickAwayListener } from '@material-ui/core';

import { mutationConfig } from '../../utils';
import { addOneList } from '../../api';
import { IBoard } from '../../types';
import { ButtonContainer } from '../../../../components';
import {
  StyledCard,
  StyledAddListContainer,
  StyledListTitleInput,
} from './AddList.styles';

interface IProps {
  setFormIsOpen: (bool: boolean) => void;
}

interface IRouteParams {
  id: string;
}

const AddListForm: React.FC<IProps> = ({ setFormIsOpen }) => {
  const { id } = useParams<IRouteParams>();
  const inputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState('');

  const queryClient = useQueryClient();

  const boardData = queryClient.getQueryData<IBoard>(['board', id])!;
  const { listsOrder, lists } = boardData;

  const { mutate: addList } = useMutation(
    () => addOneList(id, title),
    mutationConfig(id, queryClient)
  );

  const addListHandler = (event: React.FormEvent) => {
    event.preventDefault();
    inputRef.current?.focus();
    if (title && title.length) {
      const optimisticListId = `optimistic${uuidv4()}`;
      const newLists = [...lists];
      const newListsOrder = [...listsOrder];
      newLists.push({ id: optimisticListId, title, tasksOrder: [] });
      newListsOrder.push(optimisticListId);
      addList({ ...boardData, lists: newLists, listsOrder: newListsOrder });
      setTitle('');
    }
  };

  return (
    <ClickAwayListener onClickAway={() => setFormIsOpen(false)}>
      <StyledAddListContainer onSubmit={addListHandler}>
        <StyledCard>
          <StyledListTitleInput
            inputRef={inputRef}
            placeholder="Enter list title..."
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        </StyledCard>
        <ButtonContainer setFormIsOpen={setFormIsOpen} btnText="Add list" />
      </StyledAddListContainer>
    </ClickAwayListener>
  );
};

export default AddListForm;
