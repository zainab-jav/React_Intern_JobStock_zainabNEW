import React from 'react'
import bgImg from "../img/banner-10.jpg"
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import Banner from '../components/Banner'
import DetailSection from '../sections/detail/DetailSection'
//import {DetailData} from '../data/detail/DetailData'
//import CompanyData from '../data/employee/Company'
import CompanyData from '../data/company/Data'
import CompanyDetailDesc from '../sections/detail/CompanyDetailDesc'


const CompanyDetail= ({data}) => {
    var compData = CompanyData[0].cData
    
    return (
        <>
        <div class="Loader"></div>
		<div class="wrapper">
          <Navbar/>
          <div class="clearfix"></div>
          <Banner title = "Company Detail" bgImg={bgImg}/> 
            {/* {compData.map((data)  =>{
                                    const {name,profileImg,onlineStatus,tagline,shortDescription,location,email,mobile,website,phone,footerBtn1,footerBtn2} = data
                                    return(
                                        <DetailSection
                                            key = {name}
                                            name = {name}
                                            profileImg = {profileImg}
                                            onlineStatus= {onlineStatus}
                                            tagline = {tagline}
                                            shortDescription = {shortDescription}
                                            location = {location}
                                            email = {email}
                                            mobile = {mobile}
                                            website = {website}
                                            phone = {phone}
                                            footerBtn1="Favourite"
                                            footerBtn2="Save Draft"
                                            
                                        />
                                    )  
                })} */}
                <DetailSection data = {data}/>
          <CompanyDetailDesc/>
          <Footer/>

        </div> 
        </>
    )
}

export default CompanyDetail