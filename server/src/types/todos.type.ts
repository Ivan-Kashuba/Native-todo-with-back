// TODO: Put a real interfaces here
export interface ITodo {
  _id?: string;
  title: string;
  description: string;
  year: string;
  isPublic: boolean;
  isCompleted: boolean;
}

export type filterT = {
  search?: string;
  status?: string | undefined;
};
