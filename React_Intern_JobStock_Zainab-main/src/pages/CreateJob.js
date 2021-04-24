import React from 'react'
import Banner from '../components/Banner'
import GeneralDetail from '../sections/createJob/GeneralDetail'
import FullDetail from '../sections/createJob/FullDetail'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
const CreateJob = () => {
    return (
        <>
        <Navbar />
          <Banner
              cname = "inner-header-title blank"
              title = "Create Job"
          />
          <GeneralDetail />
          <FullDetail />          
        <Footer />
        </>
    )
}

export default CreateJob