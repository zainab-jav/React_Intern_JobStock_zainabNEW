import React from 'react'
import {Link} from 'react-router-dom'
import ResumeData from '../data/employee/Resume'
const ManageResumeArticle = ({id,profileImg,name,tagline,onlineStatus,hourlyRate,skills}) => {
    return (
        <>
        <article>
			<div class="mng-resume">
				<div class="col-md-2 col-sm-2">
					<div class="mng-resume-pic">
						<img src={profileImg} class="img-responsive" alt="" />
					</div>
				</div>
				<div class="col-md-3 col-sm-3">
					<div class="mng-resume-name">
						<h4>{name} <span class="cand-designation">{`(${tagline})`}</span></h4>
						<span class="cand-status">{onlineStatus}</span>
					</div>
				</div>
				<div class="col-md-2 col-sm-2">
					<div class="per-hour-rate">
						<p><i class="fa fa-money"></i> {hourlyRate}</p>
					</div>
				</div>
				<div class="col-md-4 col-sm-4">
					<div class="mng-employee-skill">
						{/* <span>html</span><span>css</span><span>java</span>
						<span>bootstrap</span> */}
						{skills.map(val => {
                            return(
                    <span key={val}>{val}</span>);
                  })} 
					</div>
				</div>
				<div class="col-md-1 col-sm-1">
					<div class="mng-resume-action">
						<a href="#" data-toggle="tooltip" title="Edit"><i class="fa fa-edit"></i></a>
						<a href="#" data-toggle="tooltip" title="Delete"><i class="fa fa-trash-o"></i></a>
					</div>
				</div>
			</div>
		</article>
        </>
    )
}

export default ManageResumeArticle