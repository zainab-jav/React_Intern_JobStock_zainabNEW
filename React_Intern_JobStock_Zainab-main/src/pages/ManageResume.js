import React from 'react'
import bgImg from "../img/banner-10.jpg"
import Banner from '../components/Banner'
import ManageResumeList from '../sections/ManageResumeList'

const ManageResume = () => {
    return (
        <>
        <div class="Loader"></div>
		<div class="wrapper">  
        <Banner title = "Manage Resume" bgImg={bgImg}/>
        <ManageResumeList/>
        </div>

        </>
    )
}

export default ManageResume