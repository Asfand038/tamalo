export interface IUser {
  id: string;
  email: string;
  username: string;
  profileImg: string;
}

export interface ICover {
  id: string;
  name: string;
  url: string;
  coverBg: {
    color: string;
    isDark: boolean;
  };
  formats: {
    thumbnail: {
      name: string;
      width: string;
      height: string;
      url: string;
    };
    large: {
      name: string;
      width: string;
      height: string;
      url: string;
    };
    medium: {
      name: string;
      width: string;
      height: string;
      url: string;
    };
    small: {
      name: string;
      width: string;
      height: string;
      url: string;
    };
  };
}

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

export interface IError {
  message: string;
}
