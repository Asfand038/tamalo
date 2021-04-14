import { BoardSchema } from '../components';

export const getBoards = async (userId: string) => {
  const data = await (
    await fetch('https://tamalo.herokuapp.com/boards', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
  ).json();
  const ownedBoards = data.filter((board: BoardSchema) =>
    board.owners.includes(userId)
  );

  const memberOfBoards = data.filter((board: BoardSchema) =>
    board.members.includes(userId)
  );

  return { ownedBoards, memberOfBoards };
};
