import { dbConfig } from "@/utils/dbConfig";
import userModel from "@/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();

    const { email, password } = await req.json();

    const user = await userModel.findOne({ email });

    if (user) {
      const hashed = await bcrypt.compare(password, user.password);

      if (hashed) {
        return NextResponse.json({
          message: "Users found",
          status: 200,
          data: user,
        });
      } else {
        return NextResponse.json({
          message: "Error with Password",
          status: 404,
        });
      }
    } else {
      return NextResponse.json({
        message: "Error with Email",
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
