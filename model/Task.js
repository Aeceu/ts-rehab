import mongoose from "mongoose";

const { Schema } = mongoose;

const taskSchema = new Schema(
    {
        name:String,
        email:String,
        Post:[{
            title:String,
            description:String,
        }],
    }
);

export default mongoose.models.tasks || mongoose.model("tasks", taskSchema);