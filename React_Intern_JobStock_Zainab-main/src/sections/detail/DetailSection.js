import React from 'react'



const DetailSection = ({data}) =>{
	const {name,profileImg,onlineStatus,tagline,shortDescription,Resume,skills,location,email,mobile,hourlyRate,website,phone,ResumeButton,CompanyButton,footerBtn1,footerBtn2} = data
    return (
        <>
        <section className="detail-desc">
				<div className="container white-shadow">
					<div className="row mrg-0">
						<div className="detail-pic">
							<img src={profileImg} className="img" alt="" />
							<a href="#" className="detail-edit" title="edit" ><i className="fa fa-pencil"></i></a>
						</div>
						<div className="detail-status">
							<span>{onlineStatus}</span>
						</div>
					</div>
					<div className="row bottom-mrg mrg-0">
						<div className="col-md-8 col-sm-8">
							<div className="detail-desc-caption">
								<h4>{name}</h4>
								<span className="designation">{tagline}</span>
								<p>{shortDescription}</p>
							</div>
							{/* {Resume && <div className="detail-desc-skill">	
                              {ResumeData[0].skills.map(val => {
                            return(
                    <span key={val}>{val}</span>);
                  })}
							</div>} */}

							{Resume && <div className="detail-desc-skill">	
                              {skills.map(val => {
                            return(
                    <span key={val}>{val}</span>);
                  })}
							
							</div>}
						</div>
						<div className="col-md-4 col-sm-4">
							<div className="get-touch">
								<h4>Get in Touch</h4>
								<ul>
									<li><i className="fa fa-map-marker"></i><span>{location}</span></li>
									<li><i className="fa fa-envelope"></i><span>{email}</span></li>
									<li><i class="fa fa-phone"></i><span>{mobile}</span></li>
									{hourlyRate && <li><i className="fa fa-money"></i><span>{hourlyRate}</span></li>}
									{website && <li><i className="fa fa-globe"></i><span>{website}</span></li>}
									{phone && <li><i className="fa fa-users"></i><span>{phone}</span></li>}
								</ul>
							</div>
						</div>
					</div>
					<div className="row no-padd mrg-0">
						<div className="detail pannel-footer">
							<div className="col-md-5 col-sm-5">
								<ul className="detail-footer-social">
									<li><a href="#"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
									<li><a href="#"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa fa-instagram"></i></a></li>
								</ul>
							</div>
							<div className="col-md-7 col-sm-7">
								{ResumeButton && <div className="detail-pannel-footer-btn pull-right">
									<a href="#" className="footer-btn grn-btn" title="">Hire Now</a>
									<a href="#" className="footer-btn blu-btn" title="">Edit</a>
								</div>}

								{CompanyButton && <div className="detail-pannel-footer-btn pull-right">
									<a href="#" className="footer-btn grn-btn" title="">Favourite</a>
									<a href="#" className="footer-btn blu-btn" title="">Save Draft</a>
								</div>}
							</div>
						</div>
					</div>
				</div>
			</section>
        </>
    )
}

export default DetailSection