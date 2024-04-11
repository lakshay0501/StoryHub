import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"
import { DropdownComponent } from "./DropdownComponent"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4 items-center">
       <Link to={'/blogs'}>
        <div className="cursor-pointer text-amber-700 font-bold">
            StoryHub
        </div>
       </Link>
       <div className="flex items-center">
        <Link to={'/publish'}>
            <button className="text-white bg bg-green-600 mr-4 rounded-lg w-20 hover:text-cyan-900 p-1">
                New Blog
            </button>
        </Link>
        <div>
            <DropdownComponent/>
         </div>
       </div>
    </div>
}