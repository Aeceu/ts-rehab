"use client"
import React, { useEffect, useState } from 'react'
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

  const [currentuser,setCurrentUser] = useState<number|null>(0);
  const [selectedUser,setSelectedUser] = useState<number|null>(0);
  function handleClick(index:any){
    setCurrentUser(index);
  }

  return (
    <div className='w-full max-w-[1600px] flex flex-col gap-8 p-4'>
      <header className='flex gap-4 border-[1px] border-opacity-10 border-slate-400 shadow-md p-4 rounded-md'>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
      </header>
      <main className='flex flex-col gap-4'>
        {/* Cards */}
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Card className='text-inherit bg-inherit border-[1px] border-slate-300 shadow-md border-opacity-10'>
            <CardHeader>
              <CardTitle>
                Physical Therapy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptatibus eum eligendi, repellendus distinctio earum repellat voluptatum voluptate, corrupti quas quaerat enim reprehenderit nobis est reiciendis nemo? Magnam, reiciendis nulla.</p>
            </CardContent>
          </Card>
          <Card className='text-inherit bg-inherit border-[1px] border-slate-300 shadow-md border-opacity-10'>
            <CardHeader>
              <CardTitle>
                Mental Therapy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptatibus eum eligendi, repellendus distinctio earum repellat voluptatum voluptate, corrupti quas quaerat enim reprehenderit nobis est reiciendis nemo? Magnam, reiciendis nulla.</p>
            </CardContent>
          </Card>
          <Card className='text-inherit bg-inherit border-[1px] border-slate-300 shadow-md border-opacity-10'>
            <CardHeader>
              <CardTitle>
                Physical Therapy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptatibus eum eligendi, repellendus distinctio earum repellat voluptatum voluptate, corrupti quas quaerat enim reprehenderit nobis est reiciendis nemo? Magnam, reiciendis nulla.</p>
            </CardContent>
          </Card >
          <Card className='text-inherit bg-inherit border-[1px] border-slate-300 shadow-md border-opacity-10'>
            <CardHeader>
              <CardTitle>
                Physical Therapy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptatibus eum eligendi, repellendus distinctio earum repellat voluptatum voluptate, corrupti quas quaerat enim reprehenderit nobis est reiciendis nemo? Magnam, reiciendis nulla.</p>
            </CardContent>
          </Card>
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