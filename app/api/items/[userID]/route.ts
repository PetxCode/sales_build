import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { dbConfig } from "@/utils/dbConfig";
import userModel from "@/utils/model/userModel";
import ItemsModel from "@/utils/model/itemModel";
import { Types } from "mongoose";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();

    const { userID } = params;
    const user = await userModel.findById(userID).populate({
      path: "items",
    });

    return NextResponse.json({
      message: "User items found",
      status: 200,
      data: user,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error",
      status: 404,
    });
  }
};

export const POST = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID } = params;

    const { name, image, imageID, price } = await req.json();

    const user = await userModel.findById(userID);

    if (user) {
      const items = await ItemsModel.create({ name, image, imageID, price });

      user?.items?.push(new Types.ObjectId(items._id!));
      user?.save();

      return NextResponse.json({
        message: "items created ",
        status: 200,
        data: items,
      });
    } else {
      return NextResponse.json({
        message: "Error with User",
        status: 404,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Error",
      status: 404,
    });
  }
};
