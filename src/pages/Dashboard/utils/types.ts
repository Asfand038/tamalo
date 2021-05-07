export interface IBoardLessDetails {
  title: string;
  id: string;
  owners: string[];
  members: string[];
  background: { [prop: string]: string };
}

export interface IDashboardData {
  ownedBoards: IBoardLessDetails[];
  memberOfBoards: IBoardLessDetails[];
}
