
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Blogs } from './pages/Blogs'
import './App.css'
import { Publish } from './pages/Publish'
import { Signout } from './pages/Signout'

function App() {

  return (
    <>
       <BrowserRouter>
         <Routes>
            <Route path='/' element={<Signin/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/signin' element={<Signin/>}></Route>
            <Route path='/blog/:id' element={<Blog/>}></Route>
            <Route path='/blogs' element={<Blogs/>}></Route>
            <Route path='/publish' element={<Publish/>}></Route>
            <Route path='/signout' element={<Signout/>}></Route>
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
