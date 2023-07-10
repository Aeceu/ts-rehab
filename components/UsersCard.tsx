import React from 'react'

import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogFooter, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger 
  } from "@/components/ui/dialog";

  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { FaTrash } from 'react-icons/fa'
import { Label } from '@/components/ui/label'


interface UsersCardProps {
    datas:any;
    handleClick:any;
    deleteUser:any;
    setNewUser:any;
    setNewEmail:any;
    handleNewUser:any;
    newuser:String;
    newemail:String;
}

export const UsersCard: React.FC<UsersCardProps> = ({
    datas,
    handleClick,
    deleteUser,
    handleNewUser,
    setNewUser,
    setNewEmail,
    newuser,
    newemail
}) => {
  return (
    <Card className='w-full flex flex-col justify-between  text-inherit bg-inherit border-[1px] border-slate-300 shadow-md border-opacity-10'>
      <CardHeader className='w-1/4'>
        <CardTitle>
          Users
        </CardTitle>
      </CardHeader>
      <Separator/>
      <CardContent className="w-full h-full flex flex-col gap-2 p-0">
      {/* Display all the users in the MongoDB database name datas. */}
      {datas.map((data:any)=>(
        <div
        className="flex justify-between items-center p-2  bg-opacity-70 border-opacity-10"
        key={data._id}
        >
          <div onClick={()=>{handleClick(data)}} className='bg-inherit  flex flex-col  items-start px-[8px] py-[8px] hover:border-gray-300  hover:border-[1px] rounded-2xl cursor-pointer '>
          <h1 className='text-1xl font-bold '>{data.name}</h1>
          <h1 className='text-[.8em] text-gray-500'>{data.email}</h1>
          </div>
          <div onClick={()=>deleteUser(data._id)} className='bg-inherit p-4 hover:border-gray-300 hover:border-[1px] rounded-full cursor-pointer'>
          <FaTrash />
          </div>
        </div>
      ))}
      </CardContent>
      <CardFooter className='p-2'>
        <Dialog>
          <DialogTrigger asChild>
            <Button className='w-max'>add new user</Button>
          </DialogTrigger>
          <DialogContent className='w-full lg:w-1/3 text-inherit bg-inherit border-[1px] border-slate-300 shadow-md bg-slate-800 text-2xl font-semibold text-white'>
            <DialogHeader >
              <DialogTitle  className='w-full flex flex-col gap-4'>
              <Label>Name:</Label>
              <Textarea placeholder='name' className='h-5' onChange={(e)=>setNewUser(e.target.value)}/>
              </DialogTitle>
            </DialogHeader>
            <DialogFooter >
              <DialogTitle  className='w-full flex flex-col gap-4'>
              <Label>Email:</Label>
              <Textarea placeholder='email' className='h-5' onChange={(e)=>setNewEmail(e.target.value)}/>
              </DialogTitle>
            </DialogFooter>
            <Button onClick={()=>handleNewUser(newuser,newemail)}>Submit</Button>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}

export default UsersCard