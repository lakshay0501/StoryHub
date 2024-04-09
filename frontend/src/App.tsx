import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Blogs } from './pages/Blogs'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
         <Routes>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/signin' element={<Signin/>}></Route>
            <Route path='/blog:id' element={<Blog/>}></Route>
            <Route path='/blogs' element={<Blogs/>}></Route>
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
