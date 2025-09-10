import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Notfound from "../404/Notfound"
import Shop from "../pages/Shop"
export default function AppRouters(){
    return(
        <>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<h1>about</h1>} />
                    <Route path="*" element={<Notfound/>} />
                    <Route path="/shop" element ={<Shop/>}/>
                </Routes>

        </>
    )
}