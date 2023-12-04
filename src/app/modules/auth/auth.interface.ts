export type ILoginUser = {
  email: string;
  password: string;
};

export type IUser = {
  name: string;
  email: string;
  password: string;
  
  phone: string;
  address: string;
  profileImg?: string;
};

export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};

export type IChangePassword = {
  oldPassword: string;
  newPassword: string;
};
