import { dbConfig } from "@/utils/dbConfig";
import userModel from "@/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const GET = async () => {
  try {
    await dbConfig();

    const user = await userModel.find();

    return NextResponse.json({
      message: "Users found",
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

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();

    const { name, email, password } = await req.json();

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = await userModel.create({ name, email, password: hashed });

    return NextResponse.json({
      message: "Users found",
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
