import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Task from "@/model/Task";
import { Types } from "mongoose";


  export const DELETE = async (req,{params}) => {
    const {userID,postID} = params;
    console.log("PARENT ID: ", userID);
    console.log("CHILD ID: ", postID);
    try {
      await connect();
      const tasks = await Task.updateOne
      (
        {
            "_id": new Types.ObjectId(userID)
        },
        {"$pull":{"Post":{"_id": new Types.ObjectId(postID)}}},
        {multi:true}
      );

      return new NextResponse(JSON.stringify({ message: "DELETED", tasks }), { status: 200 });
    } catch (error) {
      return new NextResponse(JSON.stringify({ error: "DATABASE ERROR" }), { status: 500 });
    }
  };
  