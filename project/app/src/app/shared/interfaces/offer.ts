import { IUser } from "./user";

export interface IOffer {
  _id: string;
  title: string;
  imageUrl: string;
  _ownerId: IUser;
  category: string;
  description: string;
  requirements: string;
  salary: string;
  created_on: string;
}
