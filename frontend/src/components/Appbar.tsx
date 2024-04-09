import { Avatar } from "./BlogCard"


export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 py-4 items-center">
       <div>
          Medium
       </div>
       <div>
         <Avatar name="Lakshay" size={"big"}></Avatar>
       </div>
    </div>
}