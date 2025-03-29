"use client"

import Image from "next/image"

const TableSearch = () => {
  return (
    <div className="w-full flex md:w-auto items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
            <Image src="/search.png" alt="" width={14} height={14}/>
            <input type="text" className="w-[200px] p-2 bg-transparent outline-none" placeholder="Search here..."></input>
           </div>
  )
}

export default TableSearch