import { baseUrl } from '../../../utils';
import { IBoardLessDetails, IDashboardData } from '../utils';

export const getBoards = async (userId: string) => {
  const data = await (
    await fetch(`${baseUrl}/boards`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
  ).json();

  const ownedBoards = data.filter((board: IBoardLessDetails) =>
    board.owners.includes(userId)
  );

  const memberOfBoards = data.filter((board: IBoardLessDetails) =>
    board.members.includes(userId)
  );

  const requiredData: IDashboardData = { ownedBoards, memberOfBoards };
  return requiredData;
};
