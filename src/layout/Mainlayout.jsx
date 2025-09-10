import Footer from "../components/Footer";
import Nav from "../components/Nav";
import AppRouters from "../Route/AppRouters";

export default function Mainlayout(){
    return(
        <>
            <Nav/>
            <AppRouters/>
            <Footer/>
        </>
    )
}