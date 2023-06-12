import Button from '@/components/Button';
import React from 'react'

const LoginPage = () => {
  return (
    <div className='w-full max-w-[1600px] justify-between flex flex-col gap-16'>
      <div className='flex flex-col gap-4'>
        <h1 className=' text-[80px] text_color'>Want to track your activities?</h1>
        <p className=' text-2xl'>Log in now! to explore, manage and track your progress!</p>
      </div>
      <div className='flex gap-4'>
        <Button text='Sign up' url='/' className='rounded-3xl'/>
        <Button text='Log in' url='/' className=' rounded-3xl'/>
      </div>
    </div>
  )
}

export default LoginPage;