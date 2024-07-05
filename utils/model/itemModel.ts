import { Schema, Types, model, models } from "mongoose";
import { iItemsData } from "../interface";

const itemsData = new Schema<iItemsData>(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    imageID: {
      type: String,
    },
    price: {
      type: Number,
    },
    user: {
      type: Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

const ItemsModel = models.Items || model<iItemsData>("Items", itemsData);

export default ItemsModel;
