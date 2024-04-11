import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { SpinnerComponent } from "../components/SpinnerComponent";
export const Blog = () => {
  const {id}= useParams()
   const {loading,blog} = useBlog({
       id: id || ""
   });
   
    if(loading || !blog){
       return <div className="h-screen flex flex-col justify-center">
         <div className="flex justify-center">
            <SpinnerComponent/>
         </div>
       </div>
    }
    
    return <>
       <FullBlog blog={blog}/>
    </>
}