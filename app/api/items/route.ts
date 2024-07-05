import { dbConfig } from "@/utils/dbConfig";
import ItemsModel from "@/utils/model/itemModel";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConfig();

    const items = await ItemsModel.find();

    return NextResponse.json({
      message: "items found",
      status: 200,
      data: items,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error",
      status: 404,
    });
  }
};
