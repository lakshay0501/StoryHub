import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"

interface Blog{
    
        "content": string,
        "title": string,
        "id": string,
        "author": {
            "name": string
        }
    
}

export const useBlogs = () => {
    const [blogs,setBlogs] = useState<Blog[]>([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        async function getBlogs(){
            const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                headers:{
                     Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log(res)
            setBlogs(res.data.blogs)
            setLoading(false)
        }
        getBlogs()
    },[])

    return {
        loading,
        blogs
    }
}