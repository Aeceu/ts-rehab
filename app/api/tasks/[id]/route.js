import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Task from "@/model/Task";
import { Types } from "mongoose";

export const GET = async (req, res) => {
  const { id } = req.query; // Retrieve the id parameter from req.query

  try {
    await connect();
    const task = await Task.findById(id);

    return new NextResponse(JSON.stringify(task), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
