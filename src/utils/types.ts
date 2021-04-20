export interface BoardSchema {
  title: string;
  id: string;
  owners: string[];
  members: string[];
  background: { [prop: string]: string };
}

export interface UserSchema {
  ownedBoards: BoardSchema[];
  memberOfBoards: BoardSchema[];
  userProfileImg: string;
}
