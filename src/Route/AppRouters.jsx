import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Shop from "../pages/Shop"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Shop_card from "../components/Shop/Shop_card"
import Shop_card_page2 from "../components/Shop/Shop_card_page_2"


export default function AppRouters(){
    return(
        <>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                <Routes>
                    <Route path="/p1" element ={<Shop_card/>}/>
                    <Route path="/p1" element = {<Shop_card/>}/>
                    <Route path="/p2" element = {<Shop_card_page2/>}/>
                    <Route path="/p2" element = {<Shop_card_page2/>}/>
                </Routes>

        </>
    )
}