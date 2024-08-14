import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

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
    const { email, password, username } = requestBody;

    console.log(requestBody);

    // Check if the user already exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create the new user
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
    console.error("Error during signup:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
