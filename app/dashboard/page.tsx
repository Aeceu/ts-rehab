import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import TableTask from '@/components/Table';
const dashboard =  () => {


  return (
    <div className='w-full max-w-[1600px] flex flex-col gap-8 p-4'>
      <header className='flex flex-col gap-2 border-[1px] border-opacity-10 border-slate-400 shadow-md p-4 rounded-md'>
        <h1 className='text-3xl font-bold tracking-tight text_color'>Dashboard</h1>
        <div className="text-slate-500 flex gap-2 text-[.90rem]">
        <Link href="/">Home</Link>
        <p>/ Our Dashboard</p>
      </div>
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
        <TableTask/>
      </main>
    </div>
  )
}
export default dashboard;
