import React from "react"
import img2 from "../img/gb.svg"
import {FreelancerData} from "../data/freelancer/FreelancerData";

const FreelancerInnerHeader =({name, designation, location, hourlyRate,verified,rating, profile}) => {
  const portfolioData = [
    {
      link:FreelancerData[0].portfolio.facebook,
      icon:"fa fa-facebook"
    },
    {
      link:FreelancerData[0].portfolio.linkedin,
      icon:"fa fa-linkedin"
    },
    {
      link:FreelancerData[0].portfolio.pinterest,
      icon:"fa fa-pinterest"
    },
    {
      link:FreelancerData[0].portfolio.instagram,
      icon:"fa fa-instagram"
    },
    {
      link:FreelancerData[0].portfolio.twitter,
      icon:"fa fa-twitter"
    }
  ]  
  const data = FreelancerData;
  return (
        <>
           <section className="inner-header-page">
				<div className="container">
					
					<div className="col-md-8">
						<div className="left-side-container">
							<div className="freelance-image"><a href="company-detail.html"><img src={data[0].profile} className="img-responsive img-circle" alt="" /></a></div>
							<div className="header-details">
								<h4>{data[0].name}<span className="pull-right">{data[0].hourlyRate}</span></h4>
								<p>{data[0].designation}</p>
								<ul>
									<li><a href="#"><i className="fa fa-building"></i> {data[0].place}</a></li>
									<li>
										<div className="star-rating" data-rating={data[0].rating}>
											<span className="fa fa-star fill"></span>
											<span className="fa fa-star fill"></span>
											<span className="fa fa-star fill"></span>
											<span className="fa fa-star fill"></span>
											<span className="fa fa-star-half fill"></span>
										</div>
									</li>
									<li><img className="flag" src={img2} alt="" /> {data[0].location}</li>
									{data[0].verified && <li><div className="verified-action">Verified</div></li>}
								</ul>
							</div>
						</div>
					</div>
					
					<div className="col-md-4 bl-1 br-gary">
						<div className="right-side-detail">
							<ul>
								<li><span className="detail-info">Availability</span>{data[0].availability}{data[0].online && <span className="available-status">Available</span>}</li>
								<li><span className="detail-info">Location</span>{data[0].location}</li>
								<li><span className="detail-info">Experience</span>{data[0].experience}</li>
								<li><span className="detail-info">Age</span>{data[0].age}</li>
							</ul>
							<ul className="social-info">
                {portfolioData.map(val => {
                  const {link,icon} = val;
                  return  <li key={icon}><a href={link}><i className={icon}></i></a></li>
                   
                })}
							</ul>
						</div>
					</div>
					
				</div>
			</section>
			<div className="clearfix"></div>
        </>
    );
}
export default FreelancerInnerHeader;