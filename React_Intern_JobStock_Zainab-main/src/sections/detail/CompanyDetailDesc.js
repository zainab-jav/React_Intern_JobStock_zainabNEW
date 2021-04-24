import React from 'react'
import DetailDesc1 from '../../components/detail/DetailDesc1'
//import CompanyData from '../../data/employee/Company'
import CompanyData from '../../data/company/Data'


const CompanyDetailDesc = () => {
    var aCompany = CompanyData[0].aboutCompany
    var cReq = CompanyData[0].companyReq
    var cPolicy = CompanyData[0].companyPolicy
    return (
        <>
        <section class="full-detail-description full-detail">
			<div class="container">
              {aCompany.map((data)  =>{
                                    const {title,Desc} = data
                                    return(
                                        <DetailDesc1
                                            key = {Desc}
                                            title = "About Company"
                                            Desc = {Desc}
                                            
                                        />
                                    )  
                })}
              {cReq.map((data)  =>{
                                    const {title,Desc,skills,experience} = data
                                    return(
                                        <DetailDesc1
                                            key = {experience}
                                            title = "Company Requirement"
                                            Desc = {Desc}
                                            skills = {skills}
                                            experience = {experience}
                                        />
                                    )  
                })}

                {cPolicy.map((data)  =>{
                                    const {title,Desc,timings} = data
                                    return(
                                        <DetailDesc1
                                            key = {timings}
                                            title = "Company Policy"
                                            Desc = {Desc}
                                            timings = {timings}
                                        />
                                    )  
                })}

            </div>
        </section>
        </>
    )
}

export default CompanyDetailDesc
