"use client"
import React, {useState,useEffect, useContext} from 'react'
import axios from 'axios';
import { 
  Tabs,
  TabsTrigger,
  TabsList,
  TabsContent 
} from '@/components/ui/tabs'

import Tasks from '@/components/Tasks'
import UsersCard from "@/components/UsersCard";



async function getData() {
  // Fetch data from the appropriate API route.
  try {
    const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:4200" : ""; 
    const res = await axios.get(`${baseUrl}/user`);
    return res.data;
  } catch (error) {
    console.error(error);
  }

}
export default function TableTask() {
  const [currentuser,setCurrentUser] = useState<any>(null);
  const [Post, setPost] = useState({title:"", description:""});
  const [datas, setDatas] = useState<any[]>([]);

  const [newuser, setNewUser] = useState<String>('');
  const [newemail,setNewEmail] = useState<String>('');


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

const handleNewDataSubmit = async (e:React.FormEvent,userID:String) =>{
  e.preventDefault();
  let name = currentuser.name;
  const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:4200" : ""; 
  await axios.post(`${baseUrl}/user/tasks`,{name,Post})
  setPost({title:"",description:""});
  window.location.reload();
}

const handleUpdateData = async (id:any,title:String,description:String)=>{
    try 
    {
      const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:4200" : ""; 
      const res =  await axios.put(`${baseUrl}/user`,{id,title,description})    
      const data = await res.data;
      setPost({ title: data.title, description: data.description });
   } 
   catch (error) 
   {
      console.error(error);
   } 
   window.location.reload();
   
};

const deleteData = async (userID:String,postID:String) => {
  try {
    const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:4200" : ""; 
    await axios.delete(`${baseUrl}/user/tasks`,{data:{userID,postID}})
  } catch (error) {
    console.error(error);
  }
  window.location.reload();
};

const deleteUser = async (userID:any)=>{
  try {
    const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:4200" : ""; 
    await axios.delete(`${baseUrl}/user`,{data:{userID}})
  } catch (error) {
    console.error(error);
  }
  window.location.reload();
};

const handleNewUser = async (name:String,email:String) => {
  try {
    const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:4200" : ""; 
    await axios.post(`${baseUrl}/user`,{name,email})
  } catch (error) {
    console.error(error);
  }
  window.location.reload();
}

  return (
    <>
      <div className='flex gap-4 lg:flex-row flex-col-reverse'>
        <div className='w-full h-full'>
        {/*  Table that display the todo list of the user */}
          <Tabs defaultValue="task" className={`bg-inherit text-inherit   flex flex-col gap-4`}>
            <TabsList className='bg-inherit text-inherit border-[1px] border-slate-400 w-max'>
              <TabsTrigger value='task'>Tasks</TabsTrigger>
              <TabsTrigger value='graphs'>Graph</TabsTrigger>
            </TabsList>
            <TabsContent value='task'>
              <Tasks
              currentuser={currentuser}
              Post={Post}
              setPost={setPost}
              handleUpdateData={handleUpdateData}
              deleteData={deleteData}
              handleNewDataSubmit={handleNewDataSubmit}/>
            </TabsContent>
            <TabsContent value='graphs'>
              <h1>Graph...?</h1>
            </TabsContent>
          </Tabs>
        </div>
        <div className='w-full lg:w-1/3 h-full'>
          <UsersCard
          datas={datas}
          handleClick={handleClick}
          deleteUser={deleteUser}
          handleNewUser={handleNewUser}
          setNewUser={setNewUser}
          setNewEmail={setNewEmail}
          newuser={newuser}
          newemail={newemail}
          />
        </div>
      </div>
  </>
    )
}




{/* <div className='w-full lg:w-1/3 h-full'>
  <UsersCard
  datas={datas}
  handleClick={handleClick}
  deleteUser={deleteUser}
  handleNewUser={handleNewUser}
  setNewUser={setNewUser}
  setNewEmail={setNewEmail}
  newuser={newuser}
  newemail={newemail}
  />
</div> */}
