export type TodoT = {
  _id?: string;
  title: string;
  description: string;
  isCompleted: boolean;
  isPublic: boolean;
  year?: number;
};

export type ConfigT = {
  url?: string;
  data?: object;
  headers?: object;
};

export type UserT = {
  userName?: string;
  email: string;
  password: string;
  avatar?: string;
  verifyPassword?: string;
};

export type Test = {
  email: string;
  password: string;
  avatar?: string;
};

export type filterDataT = {
  titleFilter?: string | undefined;
  status?: string | undefined;
};
