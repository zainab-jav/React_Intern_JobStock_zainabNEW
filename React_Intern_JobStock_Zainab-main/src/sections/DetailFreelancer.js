import React from "react"
import {FreelancerData, SimilarProfileData, SocialShareData} from "../data/freelancer/FreelancerData";
import ReviewList from "../components/freelancerComponents/ReviewList";
import MakeAnOffer from "../components/freelancerComponents/MakeAnOffer";
import SimilarProfile from "../components/freelancerComponents/SimilarProfile";

const DetailFreelancer = () => {
    const data = FreelancerData[0]
    const shortProfile = {
        name:data.name,
        proflie:data.profile,
        job:data.designation,
        skills:data.skills,
        rate:data.hourlyRate,
        jobsDone:data.jobsDone,
        rehired:data.rehired,
        online:data.online
    }
    return (
            <section>
                <div className="container">
                    <div className="col-md-8 col-sm-8">
                        <div className="container-detail-box">
                            <div className="apply-job-header">
                                <h4>{FreelancerData[0].name}</h4>
                                <a href={FreelancerData[0].profile} className="cl-success"><span><i
                                    className="fa fa-building"></i>{FreelancerData[0].place}</span></a>
                                <span><i className="fa fa-map-marker"></i>{FreelancerData[0].location}</span>
                            </div>

                            <div className="apply-job-detail">
                                {FreelancerData[0].description.map((data) => {
                                    return(
                                        <p
                                            key={data.id}
                                            p1={data.p1}
                                            p2={data.p2}
                                            p3={data.p3}
                                        />
                                    );
                                })}
                            </div>

                            <div className="apply-job-detail">
								<h5>Skills</h5>
								<ul className="skills">
                  {FreelancerData[0].skills.map(val => {
                      return(
                    <li key={val}>{val}</li>);
                  })}
                  
                  
                  </ul>
							</div>

                            <div className="apply-job-detail">
                                <h5>Language</h5>
                                <ul className="language">
									<li><img className="flag" src="assets/img/gb.svg" alt="" />English</li>
									<li><img className="flag" src="assets/img/gb.svg" alt="" />French</li>
									<li><img className="flag" src="assets/img/gb.svg" alt="" />Hindi</li>
								</ul>
                            </div>
                            <a href="#" className="btn btn-success">Make An Offer</a>
                        </div>
						{/* <!-- Similar Jobs --> */}

                        <div className="container-detail-box">
                            <div className="row">
                                <div className="col-md-12">
                                    <h4>Reviews</h4>
                                </div>
                            </div>

                            <div className="row">
                                {/*//Single Review */}
                                    {FreelancerData[0].reviews.map((data) => {
                                        return (
                                            <ReviewList
                                            key={data.imgSrc}
                                            imgSrc={data.imgSrc}
                                            clientName={data.clientName}
                                            tagline={data.tagline}
                                            time={data.time}
                                            message={data.message}/>
                                        );
                                    })}
                             </div>
                    </div>
                    </div>

                    {/*//Sidebar Start*/}
                    <div className="col-md-4 col-sm-4">
                        
                        <MakeAnOffer data={shortProfile}/>
                        {/* WebsitePortfolio */}
                        <div class="sidebar-wrapper">
							<div class="sidebar-box-header bb-1">
								<h4>Website & Portfolio</h4>
							</div>
						
							<ul class="block-list">
								<li><i class="fa fa-globe cl-success"></i>{data.portfolio.web}</li>
								<li><i class="fa fa-briefcase cl-success"></i>{data.portfolio.portfolio}</li>
								<li><i class="fa fa-pencil cl-success"></i>{data.portfolio.blog}</li>
							</ul>
						</div>
                        {/*//Similar Profile*/}
                        <div className="sidebar-wrapper">

                            <div className="sidebar-box-header bb-1">
                                <h4>Similar Profiles</h4>
                            </div>
                           
                                {SimilarProfileData.map((data) => {
                                    return(
                                        <SimilarProfile
                                        key={data.ImgSrc}
                                        ImgSrc={data.ImgSrc}
                                        name={data.name}
                                        designation={data.designation}
                                        occupation={data.occupation}/>
                                    );
                                })}
                            
                        </div>

                        {/*//Share This Job */}
                        <div class="sidebar-wrapper">
							<div class="sidebar-box-header bb-1">
								<h4>Share This Job</h4>
							</div>
						
							<ul class="social-share">
								<li><a href="#" class="fb-share"><i class="fa fa-facebook"></i></a></li>
								<li><a href="#" class="tw-share"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#" class="gp-share"><i class="fa fa-google-plus"></i></a></li>
								<li><a href="#" class="in-share"><i class="fa fa-instagram"></i></a></li>
								<li><a href="#" class="li-share"><i class="fa fa-linkedin"></i></a></li>
								<li><a href="#" class="be-share"><i class="fa fa-behance"></i></a></li>
							</ul>
						</div>
					</div>
                    {/* End Sidebar */}
                </div>
            </section>
    );
}
export default DetailFreelancer;