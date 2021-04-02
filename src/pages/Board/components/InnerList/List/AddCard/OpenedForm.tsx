import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient, useMutation } from 'react-query';
import { v4 as uuidv4 } from 'uuid';
import { Card, ClickAwayListener } from '@material-ui/core';
import { MoreHoriz as MoreHorizIcon } from '@material-ui/icons';

import { mutationConfig } from '../../../../utils';
import { addOneTask } from '../../../../api';
import { IBoard } from '../../../../types';
import { ButtonContainer } from '../../../../../../components';
import {
  StyledOpenedFormContainer,
  StyledOptionsIcon,
  StyledTextArea,
} from './AddCard.styles';

interface IProps {
  listId: string;
  setFormIsOpen: (bool: boolean) => void;
}

interface IRouteParams {
  id: string;
}

const OpenedForm: React.FC<IProps> = ({ setFormIsOpen, listId }) => {
  const { id } = useParams<IRouteParams>();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [cardTitle, setCardTitle] = useState('');

  const queryClient = useQueryClient();

  const boardData = queryClient.getQueryData<IBoard>(['board', id])!;
  const { lists, tasks } = boardData;

  const { mutate: addCard } = useMutation(
    () => addOneTask(id, listId, cardTitle),
    mutationConfig(id, queryClient)
  );

  const addCardHandler = () => {
    if (cardTitle && cardTitle.length) {
      const optimisticTaskId = `optimistic-${uuidv4()}`;
      const targetList = lists.find((el) => el.id === listId)!;
      targetList.tasksOrder.push(optimisticTaskId);
      const newLists = lists.filter((el) => el.id !== listId)!;
      newLists.push(targetList);
      const newTasks = [...tasks];
      newTasks.push({ id: optimisticTaskId, title: cardTitle });
      addCard({ ...boardData, lists: newLists, tasks: newTasks });
      setCardTitle('');
    }
    inputRef.current?.focus();
  };

  return (
    <ClickAwayListener
      onClickAway={() => {
        addCardHandler();
        setFormIsOpen(false);
      }}
    >
      <StyledOpenedFormContainer
        onSubmit={(event) => {
          event.preventDefault();
          addCardHandler();
        }}
      >
        <Card>
          <StyledTextArea
            inputRef={inputRef}
            placeholder="Enter a title for this card..."
            variant="outlined"
            value={cardTitle}
            multiline
            autoFocus
            rowsMax="8"
            onChange={(e) => setCardTitle(e.target.value)}
          />
        </Card>
        <ButtonContainer btnText="Add Card" setFormIsOpen={setFormIsOpen}>
          <StyledOptionsIcon>
            <MoreHorizIcon />
          </StyledOptionsIcon>
        </ButtonContainer>
      </StyledOpenedFormContainer>
    </ClickAwayListener>
  );
};

export default OpenedForm;
