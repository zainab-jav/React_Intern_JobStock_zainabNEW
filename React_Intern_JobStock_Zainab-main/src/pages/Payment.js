import React from "react"
import Design from '../sections/Design'
import Banner from '../components/Banner'
import Navbar from "../components/Navbar"
import Footer from "../sections/Footer"

function Payment(){
    return(
        <>
       
        <Navbar />
        <Banner title="Payment Method" gray/>
        <Design/>
        <Footer />
        


        </>
    )
}

export default Payment;
