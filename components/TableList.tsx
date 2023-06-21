"use client"
import React, {useState,useEffect} from 'react'
import TableTask from '@/components/Table'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsTrigger, TabsList, TabsContent } from '@/components/ui/tabs'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  
const TableList = async () => {
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

    const [currentuser,setCurrentUser] = useState<any|null>(null);
    const [selectedUser,setSelectedUser] = useState<any|null>(null);
    const [datas,setDatas]= useState<any[]>([]);

    useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setDatas(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  
    function handleClick(index: any) {
    const filteredData = datas.find((data) => data._id === index);
    setCurrentUser(filteredData?.Post || null);
    setSelectedUser(index);
  }
  return (
    <div className='flex gap-4 lg:flex-row flex-col'>
          <div className='w-full lg:w-2/3 flex flex-col gap-4'>
          <Tabs defaultValue="task" className='bg-inherit text-inherit flex flex-col gap-2'>
            <TabsList className='bg-inherit text-inherit border-[1px] border-slate-400 w-max'>
              <TabsTrigger value='task'>Tasks</TabsTrigger>
              <TabsTrigger value='graph'>Graph</TabsTrigger>
            </TabsList>
            <TabsContent value='task'>
              {<TableTask tasks={currentuser} /> }
            </TabsContent>
            <TabsContent value='graph'>
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
            {datas.map((data:any)=>(
                <div 
                onClick={()=> {
                  handleClick(data.Post);
                  setSelectedUser(data._id);
                }}
                key={data._id} 
                className={`w-full flex justify-between items-center p-4  gap-4 bg-opacity-70 border-opacity-10 hover:bg-slate-300 cursor-pointer ${selectedUser === data._id ? 'bg-slate-300' : " "}`}
                >
                <h1 className='text-1xl font-bold '>{data.name}</h1>
                <h1 className='text-[.8em] text-gray-500'>{data.email}</h1>
                </div>
            ))}
            </CardContent>
          </Card>
        </div>
  )
}

export default TableList