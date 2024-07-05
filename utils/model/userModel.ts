import { Schema, Types, model, models } from "mongoose";
import { iUserData } from "../interface";

const userData = new Schema<iUserData>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    items: [
      {
        type: Types.ObjectId,
        ref: "Items",
      },
    ],
  },
  { timestamps: true }
);

const userModel = models.Users || model<iUserData>("Users", userData);

export default userModel;
