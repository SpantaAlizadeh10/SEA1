"use client"

const Announcements = () => {
  return (
    <div className=' bg-white p-4 rounded-md'>
        <div className=" flex items-center justify-between">

            <h1 className="text-xl font-semibold">Announcment</h1>
            <span className="text-sm text-gray-400">View All</span>

        </div>
        <div className="flex  flex-col gap-4 mt-4">
            <div className="bg-se1aSkyLight rounded-md p0-4 p-3">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">lorem ipsom dolor sit</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-03-04</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Doloribus laudantium a laboriosam quis vel rerum 
                    architecto !</p>
             
            </div>
            <div className="bg-se1aPurpleLight rounded-md p0-4 p-3">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">lorem ipsom dolor sit</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-03-04</span>
                </div>

                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Doloribus laudantium a laboriosam quis vel rerum 
                    architecto laborum atque!</p>
             
            </div>
            <div className="bg-se1aYellowLight rounded-md p0-4 p-3">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">lorem ipsom dolor sit</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-03-04</span>
                </div>

                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Doloribus laudantium a laboriosam quis vel rerum 
                    architecto voluptatumatque!</p>
             
            </div>
        </div>




        </div>
  )
}

export default Announcements