import { NextResponse } from "next/server";
import connect from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import Task from "@/model/Task";
import { Types } from "mongoose";
import { MongoClient, ObjectId } from "mongodb";
export const GET =async (req:Request) => {
    try {
        await connect();
        const tasks = await Task.find()

        return new NextResponse(JSON.stringify(tasks),
        {status:200});
    } catch (error) {
        return new NextResponse("DATABASE ERROR",{status:500})
    }
}

export const POST =async (req:Request,res:Response) => {
    const {name,Post} = await req.json();
    try {
        await connect();
        const task = await Task.findOneAndUpdate(
            {name},
            {$push:{Post}},
            {new:true,upsert:true}
        )
        return new NextResponse(
            JSON.stringify(task),
            {status:200}
        )
    } catch (error) {
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

// export const DELETE = async (request:Request,res:Response) => {
//     try {
//         const id = await request.json();
//         return res.status(200).json({ message: "Hello World" });
//       } catch (error) {
//         return res.status(500).json({ message: "Error occurred." });
//       }
    // try {
    //     const id = await request.json();
    //     console.log(`id deleted ${id}`);
    //     await connect();
        
    //     const task = await Task.findOneAndUpdate(
    //         {_id: new Types.ObjectId(id)},
    //         {$pull:{Post:{_id:new Types.ObjectId(id)}}},
    //         {new:true}
    //     )
    //     return new NextResponse(
    //         JSON.stringify(task),
    //         {status:200}
    //     )
    // } catch (error) {
    //     return new NextResponse("DATABASE ERROR",{status:500})
    // }
// };
    