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
