"use client"
import React, {useState,useEffect} from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsTrigger, TabsList, TabsContent } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import TableTask from '@/components/Table'
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'





async function getData() {
  // fetch data from our api route.
  const res = await fetch("http://localhost:3000/api/tasks",{
    cache:"no-store",
  });
  if (!res.ok){
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const dashboard =  () => {
  const [currentuser,setCurrentUser] = useState<any>(null);
  const [currentdesc,setCurrentDesc] = useState<any>(null);
  const [Post, setPost] = useState({
    title:"",
    description:""
  });
  const [datas, setDatas] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setDatas(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (index: any) => {
    setCurrentUser(index);
  };

  const handleNewDataSubmit = async (e:React.FormEvent) =>{
    let name = currentuser.name;
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/tasks",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify({
        name,
        Post
      })
    })
    setPost({title:"",description:""});
    window.location.reload();
  }

  const handleUpdateData = async (id:any,title:String,description:String)=>{
    try {
      // Add the correct URL for the PUT request
      const res = await fetch(`http://localhost:3000/api/tasks`,{
         method:"PUT",
         headers:{
            "Content-type":"application/json",
         },
         // Pass in the properties as a single object in the request body
         body: JSON.stringify({ id, title, description })
      })
      const data = await res.json();
      // Update the state with the new data
      setPost({ title: data.title, description: data.description });
   } catch (error) {
      console.error(error);
   } 
   window.location.reload();
   
};

// const  deleteData = async (id : string) => {
//   try {
//     console.log(id);
    
//     const res = await fetch ("http://localhost:3000/api/tasks",{
//       method:"DELETE",
//       headers:{
//         "Content-type":"application/json"
//       },
//       body: JSON.stringify({id})
//     })
//     if (res.status === 200) {
//       const data = await res.json();
//       console.log("Deleted data:", data);
//     } else {
//       console.error(`DELETE request failed with status ${res.status}`);
//     }
//   } catch (error) {
//     console.error(error);
//   }
//   // window.location.reload();
// };

  return (
    <div className='w-full max-w-[1600px] flex flex-col gap-8 p-4'>
      <header className='flex gap-4 border-[1px] border-opacity-10 border-slate-400 shadow-md p-4 rounded-md'>
        <h1 className='text-3xl font-bold tracking-tight text_color'>Dashboard</h1>
      </header>
      <main className='flex flex-col gap-4'>
        {/* Cards */}
        <div className='grid gap-3 md:grid-cols-1 lg:grid-cols-3'>
          <Card className='text-inherit bg-inherit border-[1px] border-slate-300 shadow-md border-opacity-10 relative rounded-md'>
            <CardHeader>
              <CardTitle>
                Physical and Mental Therapy
              </CardTitle>
            </CardHeader> 
            <CardContent>
            <p>Addresses both the physical and mental aspects of recovery and reintegration. It helps restore physical function, manage pain, and improve overall well-being, while also providing a safe space to address addiction and mental health challenges, equipping individuals with coping strategies and fostering emotional well-being.</p>
            </CardContent>
          </Card>

          <Card className='text-inherit bg-inherit border-[1px] border-slate-300 shadow-md border-opacity-10 relative'>
            <CardContent className='w-full h-full flex flex-col justify-center items-start gap-16 py-8 relative'>
            <Image
            alt='image'
            src="/contact.jpg"
            fill
            className='object-center object-cover rounded-md'/>
              <CardTitle className=' z-10 w-full text-center md:text-1xl lg:text-2xl text-white font-semibold'>
                We, at Rehabify can help you throughout your journey
              </CardTitle>
              <CardDescription className='z-10 w-full flex gap-8 justify-center items-center'>
                <Link href="/contact" className={cn(buttonVariants(),"bg-[#eb4a2e] hover:bg-[tomato]")}>Contact us</Link>
                <Link href="/about" className={cn(buttonVariants()," bg-blue-700 hover:bg-blue-600")}>About us</Link>
              </CardDescription>
            </CardContent>
          </Card>


          <Card className='text-inherit bg-inherit border-[1px] border-slate-300 shadow-md border-opacity-10'>
            <CardHeader>
              <CardTitle>
                Speech and Occupational Therapy
              </CardTitle>
            </CardHeader>
            <CardContent>
            <p>Combines speech therapy and occupational therapy to support recovery and successful reintegration. It improves communication skills, addressing speech and language difficulties caused by substance abuse. Additionally, it helps individuals develop life skills, regain independence, and find purpose, enhancing functional abilities and facilitating successful reintegration into the community.</p>
            </CardContent>
          </Card >

          
          
        </div>
        {/* Datas */}
        <div className='flex gap-4 lg:flex-row flex-col'>
          <div className='w-full lg:w-2/3 flex flex-col gap-4'>
          <Tabs defaultValue="task" className='bg-inherit text-inherit flex flex-col gap-2'>
            <TabsList className='bg-inherit text-inherit border-[1px] border-slate-400 w-max'>
              <TabsTrigger value='task'>Tasks</TabsTrigger>
              <TabsTrigger value='graph'>Graph</TabsTrigger>
            </TabsList>
            <TabsContent value='task'>
              <div className="flex flex-col w-full">
                <Table className="w-full h-[300px] bg-inherit text-inherit border-[1px] border-slate-300 shadow-md border-opacity-10" >
                  <TableHeader >
                    <TableRow >
                      <TableHead className="">Check</TableHead>
                      <TableHead className="">Title</TableHead>
                      <TableHead className="w-1/2">Description</TableHead>
                      <TableHead className="w-1/4">
                        Edit
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-inherit text-inherit">
                  {currentuser && currentuser.Post.map((post:any)=>{
                    return(
                      <TableRow key={post._id} className="">
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
                              <DialogDescription className='py-8 text-inherit'>
                                {post.description}
                              </DialogDescription>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                        <TableCell className='flex gap-8 h-full w-full items-center'>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button>Edit</Button>   
                            </DialogTrigger>
                            <DialogContent className='w-full lg:w-1/3 text-inherit bg-inherit border-[1px] border-slate-300 shadow-md bg-slate-800 text-2xl font-semibold text-white'>
                                <DialogHeader>
                                <Textarea 
                                  className=" h-5" 
                                  defaultValue={post.title + Post.title}
                                  onChange={(e) =>
                                    setPost({ ...Post, title:  e.target.value })}/>
                                </DialogHeader>
                                <Separator/>
                                <Textarea
                                defaultValue={post.description + Post.description}
                                onChange={(e) =>
                                  setPost({ ...Post, description:  e.target.value })} />
                                  <Button onClick={()=>handleUpdateData(post._id,Post.title,Post.description)}>Update</Button>
                              </DialogContent>
                          </Dialog>
                        <Button onClick={()=>console.log("DELETED.")
                        }>Delete</Button>
                        </TableCell>
                      </TableRow>
                      )})}  
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            <TabsContent value='graph'>
            </TabsContent>
          </Tabs>
          
            <Dialog>
              <DialogTrigger asChild>                
                <Button className='max-w'>add new task</Button>
              </DialogTrigger>
              <DialogContent className='w-full lg:w-1/3 text-inherit bg-inherit border-[1px] border-slate-300 shadow-md bg-slate-800 text-2xl font-semibold text-white'>
                <DialogHeader>
                  <DialogTitle className="py-2 text-2xl">
                  <Textarea
                  value={Post.title}
                  onChange={(e) => setPost({ ...Post, title: e.target.value })}
                  className=" h-5"/>
                  </DialogTitle>
                </DialogHeader>
                <Separator/>
                <Textarea 
                className=" h-40" 
                value={Post.description}
          onChange={(e) =>
            setPost({ ...Post, description: e.target.value })}/>
                <DialogFooter>
                <Button 
                onClick={handleNewDataSubmit
                }
                variant="outline" 
                className='max-w'>add</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>


          </div>
          <Card className='w-full lg:w-1/3 text-inherit bg-inherit border-[1px] border-slate-300 shadow-md border-opacity-10'>
            <CardHeader>
              <CardTitle>
                Users
              </CardTitle>
            </CardHeader>
            <Separator/>
            <CardContent className='p-0'>

            {/* Display all the users in the MongoDB dabase name datas. */}
            {datas.map((data:any)=>(
              <div
              className="w-full flex justify-between items-center p-4  gap-4 bg-opacity-70 border-opacity-10 hover:bg-slate-300 cursor-pointer"
              key={data._id}
              onClick={()=>{
              handleClick(data);
              }}
              >
                <h1 className='text-1xl font-bold '>{data.name}</h1>
                <h1 className='text-[.8em] text-gray-500'>{data.email}</h1>
              </div>
            ))}
            </CardContent>
          </Card>
          
        </div>
      </main>
    </div>
  )
}

export default dashboard

