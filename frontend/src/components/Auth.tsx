import { SignUpInput } from "@lakshay_arora0501/medium-common"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Auth = ({type}:{type:"signup" | "signin"}) => {

    const navigate = useNavigate()

    const [postInputs,setpostInputs] = useState<SignUpInput>({
        email:"",
        password:"",
        name:""
    })

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup" ? "signup" : "signin"}`,postInputs)
            const jwt = response.data
            // console.log(jwt.jwt)
            localStorage.setItem("token",jwt.jwt)
            navigate("/blogs")
        } catch(err){
             alert(`Error while signup`)
        }
    }

    return <div className="h-screen flex flex-col justify-center">
       <div className="flex justify-center">
        <div>
         <div>
           <div className="text-3xl font-extrabold">
               Create an account
           </div>
           <div className="text-slate-400">
            {type==="signin" ? "Don't have an account ? " : "Already have an account ? "}
             
              <Link className="pl-2 underline" to={type==="signin" ? "/signup" : "/signin"}>{type==='signin' ? "Sign Up" : "Sign In"}</Link>
           </div>
        </div>
        <div className="pt-8">
            {type==="signup" ? <LabelledInput label="Name" placeholder="Lakshay Arora" onChange={(e)=>{
             setpostInputs({
                ...postInputs,
                name:e.target.value,
             })
           }}></LabelledInput>:null}
            <LabelledInput label="Email" placeholder="lakshay@gmail.com" onChange={(e)=>{
             setpostInputs({
                ...postInputs,
                email:e.target.value,
             })
           }}></LabelledInput>
            <LabelledInput label="Password" type={"password"} placeholder="your password" onChange={(e)=>{
             setpostInputs({
                ...postInputs,
                password:e.target.value,
             })
            }}></LabelledInput>
        </div>
           
          <button type="button" onClick={sendRequest} className="text-white w-full mt-5 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type==='signup' ? 'Sign Up' : 'Sign In'}</button>
        </div>
             
              
       </div>
    </div>
}

interface LabelledInputType {
   label:string,
   placeholder:string,
   onChange: (e:ChangeEvent<HTMLInputElement>)=>void,
   type?:string
}

function LabelledInput ({label,placeholder,onChange,type}:LabelledInputType) {
    return <>
      <div>
            <label className="block pt-4 mb-2 text-sm font-medium text-gray-900 text-black">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
        </div>
    </>
}