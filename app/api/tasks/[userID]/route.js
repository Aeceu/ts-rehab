import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Task from "@/model/Task";
import { Types } from "mongoose";

// Get all the documents using the params(parameter)
export const GET = async (req, {params}) =>{
    const {userID} =  params;
    console.log("CHILD ID: ", userID);
    try { 
        await connect();
        const task = await Task.findById(userID);
        return new NextResponse(JSON.stringify(task),{status:200})
    } catch (error) {
        return new NextResponse("DATABASE ERROR",{status:500})
    }
  }


// Delete the whole documents, or the user.
export const DELETE = async (req,{params})=>{
const {userID} = params;

try {
    await connect();
    const task = await Task.deleteOne(new Types.ObjectId(userID));
    return new NextResponse(JSON.stringify(task),{status:200})
} catch (error) {
    return new NextResponse("DATABASE ERROR",{status:500})
}
}


export const POST = async (req) => {
    const {name,Post} = await req.json();
    try {
        await connect();
        const task = await Task.findOneAndUpdate(
            {name},
            {$push:{Post}},
            {new:true,upsert:true}
        )
        return new NextResponse(
            task,
            {status:200}
        )
    } catch (error) {
        return new NextResponse("DATABASE ERROR",{status:500})
    }
}
