import { Appbar } from "../components/Appbar"
import InputComponent from "../components/InputComponent"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export const Publish = () => {
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const navigate = useNavigate()
    return <div className="justify-center pl-[20rem]">
        <div>
          <Appbar></Appbar>
        </div>
        <div className="max-w-screen-lg w-full flex flex-col ">
            <div>
              <input onChange={(e)=>{
                setTitle(e.target.value)
              }} type="text" id="helper-text" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title"></input>
            </div>
            <div className="pt-2">
              <InputComponent onChange={(e)=>{
                setContent(e.target.value)
              }}/>
              <div className="flex items-center justify-between px-3 py-2 border-t">
                        <button onClick={async()=>{
                           try {
                                const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                                    title,
                                    content,
                                    published:true
                                }, {
                                    headers: {
                                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                                    },
                                });
                                // console.log(res);
                                navigate(`/blog/${res.data.blog.id}`);
                            } catch (error) {
                                console.error("Error creating blog post:", error);
                                // Display a user-friendly error message to the user (optional)
                            }
                        }} type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Post Blog
                    </button>
                </div>
            </div>
        </div>
    </div>
}