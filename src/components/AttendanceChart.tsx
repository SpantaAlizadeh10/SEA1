
"use client"

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 24,
   
  },
  {
    name: 'Tue',
    present: 30,
    absent: 18,
   
  },
  {
    name: 'Wed',
    present: 20,
    absent: 90,
   
  },
  {
    name: 'Thu',
    present: 20,
    absent: 38,
  
  },
  {
    name: 'Fri',
    present: 10,
    absent: 40,
  
  },
  
];



const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className=' flex justify-between item-center'>
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20} />
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
         
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} tickMargin={20}/>
          <YAxis axisLine={false} tick={{fill: "#d1d5db"}} tickLine={false} tickMargin={10}/>
          <Tooltip contentStyle={{borderRadius: "10px", borderColor: "lightgray"}} />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop: "20px", paddingBottom:"40px"}}/>
          <Bar dataKey="present" fill="#FAE27C" activeBar={<Rectangle fill="pink" stroke="blue" />}
          legendType='circle'
          radius={[7,7,0,0]}
           />
          <Bar dataKey="absent" fill="#C3EBFA" activeBar={<Rectangle fill="gold" stroke="purple" />}
           legendType='circle'
           radius={[7,7,0,0]}
           />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart