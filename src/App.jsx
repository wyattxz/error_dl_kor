import { BrowserRouter } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
export default function App(){
  return(
    <>
    <BrowserRouter>
      <Mainlayout/>
    </BrowserRouter>
      
    </>
  )
}