import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './app.scss'
import Layout from './components/Layout'
import Home from "./pages/home/Home"
import Login from './pages/login/Login'
import Error from './pages/error/Error'


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path='*' element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}