import { getRandomImg, BoardSchema } from '../../../utils';

export const getBoards = async (userId: string) => {
  const data = await (
    await fetch('https://tamalo.herokuapp.com/boards', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
  ).json();

  console.log(data);
  const ownedBoards = data.filter((board: BoardSchema) =>
    board.owners.includes(userId)
  );

  const memberOfBoards = data.filter((board: BoardSchema) =>
    board.members.includes(userId)
  );

  const userProfileImg = getRandomImg();

  return { ownedBoards, memberOfBoards, userProfileImg };
};
