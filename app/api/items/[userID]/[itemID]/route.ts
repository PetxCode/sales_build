import { NextRequest, NextResponse } from "next/server";
import { Types } from "mongoose";
import { dbConfig } from "@/utils/dbConfig";
import ItemsModel from "@/utils/model/itemModel";
import userModel from "@/utils/model/userModel";

export const DELETE = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();

    const { userID, itemID } = params;

    const user = await userModel.findById(userID);

    if (user) {
      await ItemsModel.findByIdAndDelete(itemID);

      user?.items?.pull(new Types.ObjectId(itemID));
      user?.save();
    } else {
      return NextResponse.json({
        message: "Error with User",
        status: 404,
      });
    }

    return NextResponse.json({
      message: "User items delete",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error",
      status: 404,
    });
  }
};
