import React from 'react'

const DetailDesc1 = ({title,Desc,institute,name,year,company,position,skills,experience,timings}) => {
    return (
        <>
         <div className="row row-bottom mrg-0">
						<h2 className="detail-title">{title}</h2> 
						<p>{Desc}</p> 
						<ul className="detail-list">
						{/* Education in ResumeDetail Page */}
							{institute && <li>{institute}</li>}
							{name && <li>{name}</li>}
							{year && <li>{year}</li>}

						{/*Work Experience in ResumeDetail Page */}
							{company && <li>{company}</li>}
							{position && <li>{position}</li>}
						
						{/*Company Requirement in CompanyDetail Page */}
						{skills && <li>{skills}</li>}
						{experience && <li>{experience}</li>}

						{/*Company Policy in CompanyDetail Page */}
						{timings && <li>{timings}</li>}
						


						</ul>
					</div> 
        </>
    )
}

export default DetailDesc1