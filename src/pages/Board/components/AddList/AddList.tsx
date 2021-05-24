import React, { useState, useRef, memo } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useQueryClient, useMutation } from 'react-query';
import { ClickAwayListener } from '@material-ui/core';
import { AddOutlined as AddOutlinedIcon } from '@material-ui/icons';

import { mutationConfig, IBoard } from '../../utils';
import { addOneList } from '../../api';
import { ButtonContainer, ErrorAlert } from '../../../../components';
import { errorMessages } from '../../../../utils';

import {
  StyledContainer,
  StyledOpenFormBtn,
  StyledCollapse,
  StyledCard,
  StyledAddListContainer,
  StyledListTitleInput,
} from './AddList.styles';

interface IRouteParams {
  id: string;
}

const AddList: React.FC = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [title, setTitle] = useState('');

  const { id } = useParams<IRouteParams>();
  const inputRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

  const boardData = queryClient.getQueryData<IBoard>(['board', id])!;
  const { listsOrder, lists } = boardData;

  const { mutate: addList, error } = useMutation(
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
    <>
      {error && <ErrorAlert message={errorMessages.addList} />}
      <StyledContainer>
        <StyledOpenFormBtn onClick={() => setFormIsOpen(true)}>
          <AddOutlinedIcon />
          <div>Add another list</div>
        </StyledOpenFormBtn>
        <StyledCollapse
          in={formIsOpen}
          timeout={{ enter: 200, exit: 200 }}
          unmountOnExit
        >
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
              <ButtonContainer
                setFormIsOpen={setFormIsOpen}
                btnText="Add list"
              />
            </StyledAddListContainer>
          </ClickAwayListener>
        </StyledCollapse>
      </StyledContainer>
    </>
  );
};

export default memo(AddList);
