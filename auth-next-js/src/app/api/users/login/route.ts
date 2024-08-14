import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Ensure the database connection is established
async function ensureDbConnection() {
  try {
    await connect();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Failed to connect to the database");
  }
}

export async function POST(request: NextRequest) {
  try {
    // Establish the database connection
    await ensureDbConnection();

    const requestBody = await request.json();
    const { email, password } = requestBody;
    console.log("requestBody ==== ", requestBody);

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    // Check if the password is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    // Create JWT token data
    const tokenData = {
      _id: user._id,
      email: user.email,
      username: user.username,
    };

    // Create JWT token
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "User logged in successfully",
      success: true,
      token,
    });

    // Set JWT token in cookie
    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    console.error("Error during login:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
