import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

async function ensureDbConnection() {
  try {
    await connect();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Failed to connect to the database");
  }
}

export async function GET(request: NextRequest) {
  try {
    await ensureDbConnection();

    const userId = await getDataFromToken(request);

    const user = await User.findOne({ _id: userId }).select("-password"); // Exclude the password field

    return NextResponse.json({
      message: "User fetched successfully",
      success: true,
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
