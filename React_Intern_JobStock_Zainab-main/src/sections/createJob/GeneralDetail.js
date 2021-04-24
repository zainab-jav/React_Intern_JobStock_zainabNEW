import React from 'react'

const GeneralDetail = () => {
    return (
        <>
        <div className="detail-desc section">
				<div className="container white-shadow">
				
					<div className="row">
						<div className="detail-pic js">
							<div className="box">
								<input type="file" name="upload-pic[]" id="upload-pic" className="inputfile" />
								<label htmlFor="upload-pic"><i className="fa fa-upload" aria-hidden="true"></i><span></span></label>
							</div>
						</div>
					</div>
					
					<div className="row bottom-mrg">
						<form className="add-feild">
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Job Title"/>
								</div>
							</div>
							
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Your Email"/>
								</div>
							</div>
							
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<select className="form-control input-lg">
										<option>Job Type</option>
										<option>Full Time</option>
										<option>Part Time</option>
										<option>Freelancer</option>
										<option>Internship</option>
									</select>
								</div>
							</div>
							
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Location,e.g. London Quel Mark"/>
								</div>
							</div>
							
							<div className="col-md-12 col-sm-12">
								<textarea className="form-control" placeholder="Job Description"></textarea>
							</div>
							
						</form>
					</div>
					
					<div className="row no-padd">
						<div className="detail pannel-footer">
							<div className="col-md-12 col-sm-12">
								<div className="detail-pannel-footer-btn pull-right">
									<a href="#" className="footer-btn choose-cover">Choose Cover Image</a>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
        </>
    )
}

export default GeneralDetail