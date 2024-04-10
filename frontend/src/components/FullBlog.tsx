import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({blog}:{blog:Blog}) => {
    return <div>
        <Appbar/>
        <div className="flex justify-center">
    <div className="grid grid-cols-12 px-10 w-full  pt-12 max-w-screen-xl">
        <div className=" col-span-8">
            <div className="text-3xl font-extrabold">
               {blog!==undefined ? blog.title : ""}
            </div>
            <div className="text-slate-500 pb-2">
                Post on 2nd December
            </div>
            <div className="">
               {blog.content}
            </div>
        </div>
        <div className=" col-span-4">
            <div className="text-slate-600">
               Author
            </div>
          <div className="flex">
            <div className="pr-1 flex flex-col justify-center">
               <Avatar name={blog.author.name || "Anonymous"} size="small"></Avatar>
            </div>
               <div className="pl-1">
                    <div className="text-xl font-bold">
                    {blog.author.name || "Anonymous"}
                    </div>
                    <div className="pt-2 text-slate-500">
                        Random catch phrase about the author's ability to grab the user's attention
                    </div>
               </div>
         </div>
            
        </div>
    </div>
   </div>
  </div>
}