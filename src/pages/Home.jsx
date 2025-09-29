
import Card_review from "../components/Card_review";
import Delivery_card from "../components/Delivery_card";
import Discount from "../components/Discount";
import Home_card from "../components/Home_card";
import Main from "../components/Main";
import Slidebar from "../components/Slidebar";

export default function Home(){
    return(
        <>
            <Discount/>
            <Slidebar/>
            <Home_card/>
            <Main/>
            <Card_review/>
            <Delivery_card/>

        </>
    )
}