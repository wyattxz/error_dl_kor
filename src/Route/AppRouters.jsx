import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Notfound from "../404/Notfound"
import Shop from "../pages/Shop"
import Blog from "../pages/Blog"
import Careers from "../pages/Careers"
import Faq from "../pages/Faq"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Shop_card from "../components/Shop/Shop_card"
import Shop_card_page2 from "../components/Shop/Shop_card_page2"
export default function AppRouters(){
    return(
        <>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/shop" element ={<Shop/>}/> 
                    <Route path="/blog" element = {<Blog/>}/>
                    <Route path="/about" element = {<About/>}/>
                    <Route path="/careers" element = {<Careers/>}/>
                    <Route path="/faq" element = {<Faq/>}/>
                    <Route path="/contact" element = {<Contact/>}/>
                    <Route path="*" element={<Notfound/>} />
                </Routes>
                <Routes>
                    <Route path="/back" element ={<Shop_card/>}/>
                    <Route path="/p1" element = {<Shop_card/>}/>
                    <Route path="/p2" element = {<Shop_card_page2/>}/>
                    <Route path="/next" element = {<Shop_card_page2/>}/>
                </Routes>

        </>
    )
}