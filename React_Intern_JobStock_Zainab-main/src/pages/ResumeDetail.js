import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import bgImg from "../img/banner-10.jpg"
import Banner from '../components/Banner'
import DetailSection from '../sections/detail/DetailSection'
import ResumeDetailDesc from '../sections/detail/ResumeDetailDesc'
import ResumeData from '../data/employee/Resume'


const ResumeDetail = ({data}) => {
   var RData = ResumeData[0]
    return (
        <>
        <div class="Loader"></div>
		<div class="wrapper">
            <Navbar/>
            <div class="clearfix"></div>
            <Banner title = "Resume Detail " bgImg={bgImg}/>
            {/* <DetailSection
                name = {ResumeData[0].name}
                profileImg = {ResumeData[0].profileImg}
                tagline = {ResumeData[0].tagline}
                shortDescription = {ResumeData[0].shortDescription}
                Resume
                location = {ResumeData[0].location}
                email = {ResumeData[0].email}
                mobile = {ResumeData[0].mobile}
                hourlyRate = {ResumeData[0].hourlyRate}
                onlineStatus = {ResumeData[0].onlineStatus}
                footerBtn1 = {ResumeData[0].footerBtn1}
                footerBtn2 = {ResumeData[0].footerBtn2}
            /> */}
             {/* {ResumeData.map((data)  =>{
                                    const {id,name,profileImg,onlineStatus,tagline,shortDescription,Resume,skills,location,email,mobile,hourlyRate,footerBtn1,footerBtn2} = data
                                    return(
                                        <DetailSection
                                            key = {id}
                                            id = {id}
                                            name = {name}
                                            profileImg = {profileImg}
                                            onlineStatus= {onlineStatus}
                                            tagline = {tagline}
                                            shortDescription = {shortDescription}
                                            Resume
                                            location = {location}
                                            email = {email}
                                            mobile = {mobile}
                                            hourlyRate = {hourlyRate}
                                            footerBtn1="Hire Now"
                                            footerBtn2="Edit"
                                            skills = {skills}
                                            
                                        />
                                    )  
                })}  */}
                <DetailSection data = {data}/>
               
            <ResumeDetailDesc/>
            <Footer/>
        </div>
        </>
    )
}

export default ResumeDetail;