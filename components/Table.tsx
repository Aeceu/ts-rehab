"use client"
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { useState,useEffect } from "react";
import { Textarea } from "./ui/textarea";


export default  function TableTask({tasks}:{tasks:any[]}) {

  const [datas,setDatas] = useState(tasks);

  useEffect(() => {
    setDatas(tasks);
  }, [tasks]);

  return (
<div className="flex flex-col w-full">
    <Table className="w-full h-[300px] bg-inherit text-inherit border-[1px] border-slate-300 shadow-md" >
      <TableCaption> Table of task</TableCaption>
      <TableHeader >
        <TableRow >
          <TableHead className="">Check</TableHead>
          <TableHead className="">Title</TableHead>
          <TableHead className="w-1/2">Description</TableHead>
          <TableHead className="">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-inherit text-inherit">
      
      {
        datas.map((post:any,postId:any)=>(
          <TableRow key={postId} className="">
            <TableCell><Checkbox className="bg-white"/></TableCell>
            <TableCell>{post.title}</TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <h1 className="p-4 cursor-pointer">...</h1>
                </DialogTrigger>
                <DialogContent className='w-full lg:w-1/3 text-inherit bg-inherit border-[1px] border-slate-300 shadow-md bg-slate-800 text-2xl font-semibold text-white'>
                  <DialogHeader>
                    <DialogTitle className="py-2 text-2xl">{post.title}</DialogTitle>
                  </DialogHeader>
                  <Separator/>
                  <Textarea className=" h-40">{post.description}</Textarea>
                </DialogContent>
              </Dialog>
            </TableCell>
            <TableCell>{post.date}</TableCell>
        </TableRow>
        ))
      }


      </TableBody>
    </Table>
    
    {/* <Dialog>
      <DialogTrigger asChild>
      <Button  className="max-w-max">new task</Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
        <DialogTitle>What's to add?</DialogTitle>
        <DialogDescription>Input task to be added</DialogDescription>
        </DialogHeader>
        <div>
          <label htmlFor="task">Task</label>
          <Input id="task"  onChange={handleChanges} value={}/>
          <Separator/>
          <label htmlFor="invoice">invoice</label>
          <Input id="invoice"  onChange={handleChanges} value={}/>
          <Separator/>
          <label htmlFor="paymentStatus">paymentStatus</label>
          <Input id="paymentStatus"  onChange={handleChanges} value={}/>
          <Separator/>
          <label htmlFor="paymentMethod">paymentMethod</label>
          <Input id="paymentMethod"  onChange={handleChanges} value={}/>
          <Separator/>
          <label htmlFor="totalAmount">totalAmount</label>
          <Input id="totalAmount"  onChange={handleChanges} value={}/>
          <Separator/>
        </div>
      <DialogFooter>
      <Button onClick={pushItem} className="max-w-max">ADD</Button>
      </DialogFooter>
      </DialogContent>
    </Dialog> */}
    
    
    {/* <Button onClick={pushItem} className="max-w-max">ADD new</Button> */}
        </div>
    )
}
