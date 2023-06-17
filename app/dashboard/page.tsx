"use client"
import React, {useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import TableTask from '@/components/Table'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsTrigger, TabsList, TabsContent } from '@/components/ui/tabs'
import {Graph} from '@/components/Graph'
import { john_invoices, jose_invoices, marie_invoices } from '@/Data/TableData';
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

type User = {
  name: string;
  email: string;
  Graph:any[];
  Post: {
    postId: string;
    title: string;
    description: string;
    date: string;
  }[];
};

const dashboard = () => {
  const users:User[] = [...jose_invoices, ...john_invoices,...marie_invoices];

  const [currentuser,setCurrentUser] = useState<number|null>(null);
  const [selectedUser,setSelectedUser] = useState<number|null>(null);
  function handleClick(index:any){
    setCurrentUser(index);
  }

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
        <div className='flex gap-4 lg:flex-row flex-col-reverse'>
          <div className='w-full lg:w-2/3 flex flex-col gap-4'>
          <Tabs defaultValue="task" className='bg-inherit text-inherit flex flex-col gap-2'>
            <TabsList className='bg-inherit text-inherit border-[1px] border-slate-400 w-max'>
              <TabsTrigger value='task'>Tasks</TabsTrigger>
              <TabsTrigger value='graph'>Graph</TabsTrigger>
            </TabsList>
            <TabsContent value='task'>
              {currentuser !== null && 
              <TableTask tasks={users[currentuser].Post} />
              }
            </TabsContent>
            <TabsContent value='graph'>
            { currentuser !== null && 
              <Graph data={users[currentuser].Graph}/>
              }
            </TabsContent>
          </Tabs>
          </div>
          <Card className='w-full lg:w-1/3 text-inherit bg-inherit border-[1px] border-slate-300 shadow-md border-opacity-10'>
            <CardHeader>
              <CardTitle>
                Users
              </CardTitle>
            </CardHeader>
            <Separator/>
            <CardContent className='p-0'>
            {users.map((user,index)=>(
                <div 
                onClick={()=> {
                  handleClick(index);
                  setSelectedUser(index);
                }}
                key={index} 
                className={`w-full flex justify-between items-center p-4  gap-4 bg-opacity-70 border-opacity-10 hover:bg-slate-300 cursor-pointer ${selectedUser === index ? 'bg-slate-300' : " "}`}
                >
                <h1 className='text-1xl font-bold '>{user.name}</h1>
                <h1 className='text-[.8em] text-gray-500'>{user.email}</h1>
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
