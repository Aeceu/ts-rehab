const express = require('express');
const cors = require('cors');
const connect = require('../../lib/db')
const tasksRouter = require('./router/tasksRouter')
const userTasksRouter = require("./router/userTasksRouter");
const app = express();

app.use(express.json());
app.use(cors());

connect();


app.use("/user",tasksRouter);
app.use("/user/tasks",userTasksRouter);
app.listen(4200,()=>console.log("Listening to http://localhost:4200"))