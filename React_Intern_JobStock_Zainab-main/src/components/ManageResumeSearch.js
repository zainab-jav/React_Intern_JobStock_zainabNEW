import React from 'react'

const ManageResumeSearch = () => {
    return(
        <>
        <div class="row">
						<div class="col-md-12 col-sm-12">
							<div class="search-filter">
							
								<div class="col-md-4 col-sm-5">
									<div class="filter-form">
										<div class="input-group">
											<input type="text" class="form-control" placeholder="Search…"/>
											<span class="input-group-btn">
												<button type="button" class="btn btn-default">Go</button>
											</span>
										</div>
									</div>
								</div>
								
								<div class="col-md-8 col-sm-7">
									<div class="short-by pull-right">
										Short By
										<div class="dropdown">
										<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <i class="fa fa-angle-down" aria-hidden="true"></i></a>
										<ul class="dropdown-menu">
											<li><a href="#">Short By Date</a></li>
											<li><a href="#">Short By Views</a></li>
											<li><a href="#">Short By Popular</a></li>
										</ul>
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
        </>
    )
}

export default ManageResumeSearch