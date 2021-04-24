import React from 'react'
import debit from '../img/debit.png'

function Design(){
    return(
        <>
            <section className="accordion">
				<div className="container">
					<div className="row">
						
						
						<div className="col-md-6 col-sm-6">
							<div className="sidebar-wrapper">
							
							<div className="sidebar-box-header bb-1">
								<h4>Billing Information</h4>
							</div>
							
							<form className="billing-form">
								<div className="row">
									<div className="col-xs-12">
										<label>Full Name</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="row">
									<div className="col-xs-12">
										<label>Address</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="row">
									<div className="col-xs-12">
										<label>City</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="row">
									<div className="col-xs-6">
										<label>State</label>
										<select className="form-control input-lg">
											<option>State</option>
											<option>Punjab</option>
											<option>Haryana</option>
											<option>Madhya Pradesh</option>
										</select>
									</div>
									<div className="col-xs-6">
										<label>Zip Code</label>
										<input type="text" className="form-control" />
									</div>
								</div>
							</form>
							
							</div>
						</div>
						
						
						<div className="col-md-6 col-sm-6">
							<div className="sidebar-wrapper">
							
							<div className="sidebar-box-header bb-1">
								<h4>Credit Card Information</h4>
							</div>
							
							<form className="billing-form">
								<div className="row">
									<div className="col-xs-12">
										<label>Nmae Of Card</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="row">
									<div className="col-xs-8">
										<label>Card Number</label>
										<input type="text" className="form-control" />
									</div>
									<div className="col-xs-4">
										<img src={debit} className="img-responsive payment-img" alt=""/>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-8">
										<label>Expiration Date</label>
										<div className="row">
											<div className="col-xs-6">
												<select className="form-control input-lg">
													<option>January</option>
													<option>February</option>
													<option>March</option>
													<option>April</option>
												</select>
											</div>
											<div className="col-xs-6">
												<select className="form-control input-lg">
													<option>2020</option>
													<option>2021</option>
													<option>2022</option>
													<option>2023</option>
												</select>
											</div>
										</div>
									</div>
									<div className="col-sm-4">
										<label>CVC/CVV</label>
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="row">
									<div className="col-xs-12">
										<label>Coupon Code(If Available)</label>
										<input type="text" className="form-control" />
									</div>
								</div>
							</form>
							
							</div>
						</div>
						
					</div>
					
					<div className="row">
						<div className="col-md-12 text-center">
							<a href="#" className="btn btn-success">Proceed...</a>
							<a href="#" className="btn btn-default">Cancel...</a>
						</div>
					</div>
				</div>
			</section>

        </>
    )
}

export default Design;