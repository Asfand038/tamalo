import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { DraggableProvided } from 'react-beautiful-dnd';
import { MoreHoriz as MoreHorizIcon } from '@material-ui/icons';

import { updateOneList } from '../../../../api';
import { mutationConfig, IBoard } from '../../../../utils';
import { ErrorAlert } from '../../../../../../components';
import { errorMessages } from '../../../../../../utils';
import {
  StyledListTitle,
  StyledListTitleWrapper,
  StyledListTitleInput,
} from './ListTitle.styles';

interface IProps {
  provided: DraggableProvided;
  title: string;
  listId: string;
}

interface IRouteParams {
  id: string;
}

const ListTitle: React.FC<IProps> = ({ provided, title, listId }) => {
  const { id } = useParams<IRouteParams>();
  const [listTitle, setListTitle] = useState(title);
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const queryClient = useQueryClient();

  const boardData = queryClient.getQueryData<IBoard>(['board', id])!;
  const { lists, tasks } = boardData;

  const { mutate: updateListTitle, error } = useMutation(
    () => updateOneList(listId, listTitle, lists, tasks),
    mutationConfig(id, queryClient)
  );

  const updateListTitleHandler = () => {
    if (listTitle.length && listTitle !== title) {
      const targetList = lists.find((el) => el.id === listId)!;
      targetList.title = listTitle;
      const newLists = lists.filter((el) => el.id !== listId)!;
      newLists.push(targetList);
      updateListTitle({ ...boardData, lists: newLists });
    } else {
      const targetList = lists.find((el) => el.id === listId)!;
      setListTitle(targetList.title);
    }
    setIsEditingTitle(false);
  };

  return (
    <>
      {error && <ErrorAlert message={errorMessages.updateList} />}
      <StyledListTitleWrapper>
        {!isEditingTitle && (
          <StyledListTitle
            onClick={() => setIsEditingTitle(true)}
            {...provided.dragHandleProps}
          >
            {listTitle}
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
            onBlur={updateListTitleHandler}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                updateListTitleHandler();
              }
            }}
          />
        )}
        <span>
          <MoreHorizIcon />
        </span>
      </StyledListTitleWrapper>
    </>
  );
};

export default React.memo(ListTitle);
