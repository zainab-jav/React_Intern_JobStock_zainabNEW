import React from 'react'
import DetailDesc1 from '../../components/detail/DetailDesc1'
import ResumeDetailDesc2 from '../../components/detail/ResumeDetailDesc2'
import ResumeData from '../../data/employee/Resume'




const ResumeDetailDesc = () => {
    var rSkills = ResumeData[0].resumeSkills
    var aResume = ResumeData[0].aboutResume
    var edu = ResumeData[0].education
    var wExp = ResumeData[0].workExp
    return (
        <>
        <section className="full-detail-description full-detail">
			<div className="container">    
                {aResume.map((data)  =>{
                                    const {title,Desc} = data
                                    return(
                                        <DetailDesc1
                                            key = {title}
                                            title = "About Resume"
                                            Desc = {Desc}
                                        />
                                    ) 
                                })}
               
                {edu.map((data)  =>{
                                    const {title,Desc,institute,name,year} = data
                                    return(
                                        <DetailDesc1
                                            key = {year}
                                            title = "Education"
                                            Desc = {Desc}
                                            institute = {institute}
                                            name = {name}
                                            year = {year}
                                        />
                                    )  
                                })}

                {wExp.map((data)  =>{
                                    const {title,Desc,company,position} = data
                                    return(
                                        <DetailDesc1
                                            key = {position}
                                            title = "Work Experience"
                                            Desc = {Desc}
                                            company = {company}
                                            position = {position}
                                        />
                                    )  
                                })}
                               
                <div className="row row-bottom mrg-0">
					<h2 className="detail-title">Skills</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<div className="ext-mrg row third-progress">
						<div className="col-md-6 col-sm-6">
							<div className="panel-body">
                                {rSkills.map((data)  =>{
                                    const {skill,level} = data
                                    return(
                                        <ResumeDetailDesc2
                                            key = {skill}
                                            skill = {skill}
                                            level = {level}
                                        />
                                    ) 
                                })}
                                  
                            </div>
						</div>

                        <div className="col-md-6 col-sm-6">
							<div className="panel-body"> 
                                {rSkills.map((data)  =>{
                                    const {skill,level} = data
                                    return(
                                        <ResumeDetailDesc2
                                            key = {skill}
                                            skill = {skill}
                                            level = {level}
                                        />
                                    ) 
                                })}
                            </div>
						</div>
                    </div> 
				</div>      

            </div>
        </section>									
        </>
    )
}

export default ResumeDetailDesc