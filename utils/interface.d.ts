import { Document } from "mongoose";

export interface iUser {
  name: string;
  email: string;
  password: string;
  items: {}[];
}

export interface iUserData extends iUser, Document {}

export interface iItems {
  name: string;
  image: string;
  imageID: string;
  price: number;
  user: {};
}

export interface iItemsData extends iItems, Document {}
