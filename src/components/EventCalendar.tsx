"use client"

import Image from "next/image";
import { describe } from "node:test";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// temporary
const events = [
    {
        id: 1,
        title: "English Course ",
        time: "12:00PM - 2:00 PM",
        description: "lorem ipsum dollar sit"
    },
    {
        id: 2,
        title: "Guide Course ",
        time: "12:00PM - 2:00 PM",
        description: "lorem ipsum dollar sit"
    },
    {
        id: 3,
        title: "SignUP Course ",
        time: "12:00PM - 2:00 PM",
        description: "lorem ipsum dollar sit"
    },
    {
        id: 4,
        title: "Find Course ",
        time: "12:00PM - 2:00 PM",
        description: "lorem ipsum dollar sit"
    },
    {
        id: 5,
        title: " Call to us ",
        time: "12:00PM - 2:00 PM",
        description: "lorem ipsum dollar sit"
    },
]


const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-white p-4 rounded-md'>
         <Calendar onChange={onChange} value={value} />
         <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold my-4">Events</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
         </div>
         <div className="flex flex-col gap-4">
            {events.map(event => (
                <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-se1aSky even:border-t-se1aPurple" key={event.id}>
                    <div className="flex items-center justify-between">
                        <h1 className="font-semibold text-gray-600">{event.title}</h1>
                        <span className="text-gray-300 text-xs">{event.time}</span>
                    </div>
                    <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
                </div>
            ))}
         </div>
         </div>
  )
}

export default EventCalendar