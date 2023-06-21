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

async function getData(id:any) {
  // fetch data from our api route.
  const res = await fetch(`http://localhost:3000/api/tasks/${id}`,{
    cache:"no-store",
  });
  if (!res.ok){
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default function TableTask({tasks}:{tasks:any}) {
  const [datas, setDatas] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(tasks);
        setDatas(data);
        console.log(data);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full">
          <Table className="w-full h-[300px] bg-inherit text-inherit border-[1px] border-slate-300 shadow-md border-opacity-10" >
            <TableCaption> Table of task</TableCaption>
            <TableHeader >
              <TableRow >
                <TableHead className="">Check</TableHead>
                <TableHead className="">Title</TableHead>
                <TableHead className="w-1/2">Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-inherit text-inherit">
             {datas.Post && datas.Post.map((post:any)=>{
              return(
                <TableRow key={post._id} className="">
                  <TableCell><Checkbox className="bg-white"/></TableCell>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="p-4 cursor-pointer">...</div>
                      </DialogTrigger>
                      <DialogContent className='w-full lg:w-1/3 text-inherit bg-inherit border-[1px] border-slate-300 shadow-md bg-slate-800 text-2xl font-semibold text-white'>
                        <DialogHeader>
                          <DialogTitle className="py-2 text-2xl">{post.title}</DialogTitle>
                        </DialogHeader>
                        <Separator/>
                        <Textarea className=" h-40" defaultValue={post.description}/>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  <TableCell>{post.date}</TableCell>
                </TableRow>

                
                )})}  
            </TableBody>
            
          </Table>
    </div>   
    )
}
