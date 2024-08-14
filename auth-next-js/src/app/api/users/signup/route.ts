import { connect } from "@/dbConfig/dbConfig";
import User from "../../../../models/userModel.js";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    const { email, password, username } = requestBody;

    console.log(requestBody);

    //check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    //create user
    const newUser = new User({
      email,
      username,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log("savedUser ==== ", savedUser);

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
