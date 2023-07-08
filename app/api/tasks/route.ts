import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Task from "@/model/Task";
import { Types } from "mongoose";


export const GET = async (req:Request) => {
    try {
        await connect();
        const tasks = await Task.find()
        return new NextResponse(JSON.stringify(tasks),
        {status:200});
    } catch (error) {
        return new NextResponse("DATABASE ERROR",{status:500})
    }
}

export const POST = async (req:Request,res:Response) => {
    try{
        const {username,email} = await req.json();
        console.log(username,email);
        
        await connect();
        const task = await Task.insertMany(
            {"name":username, "email":email}
        )
        return new NextResponse(JSON.stringify(task),{status:200})

    }catch(error){
        return new NextResponse("DATABASE ERROR",{status:500})
    }
}

export const PUT = async (request: Request) => {
    try {
      const { id, title, description } = await request.json();
      console.log(id, title, description);

      await connect();
      const task = await Task.findOneAndUpdate(
      { "Post._id": new Types.ObjectId(id) },
      {
        $set: {
          "Post.$.title": title,
          "Post.$.description": description
        }
      }
    );
      return new NextResponse(
        JSON.stringify(task),
        {status:200}
    )
} catch (error) {
    return new NextResponse("DATABASE ERROR",{status:500})
}
  };



    