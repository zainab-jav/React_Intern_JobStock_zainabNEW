import React from 'react'

const FullDetail1 = ({title,icon1,ph1,icon2,ph2,icon3,ph3,icon4,ph4,icon5,ph5,icon6,id,en,mode,min,max,days,dataId,dataTheme,rO,ph6}) => {
    return(
        <>
        <form>
			<h2 className="detail-title">{title}</h2>		
				<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<span className="input-group-addon"><i className={icon1}></i></span>
									<input type="text" className="form-control" placeholder={ph1}/>
								</div>	
							</div>
							
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<span className="input-group-addon"><i className={icon2}></i></span>
									<input type="text" className="form-control" placeholder={ph2}/>
								</div>	
							</div>
							
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<span className="input-group-addon"><i className={icon3}></i></span>
									<input type="text" className="form-control" placeholder={ph3}/>
								</div>	
							</div>
							
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<span className="input-group-addon"><i className={icon4}></i></span>
									<input type="text" className="form-control" placeholder={ph4}/>
								</div>	
							</div>
							
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<span className="input-group-addon"><i className={icon5}></i></span>
									<input type="text" className="form-control" placeholder={ph5}/>
								</div>	
							</div>
							
							<div className="col-md-6 col-sm-6">
								<div className="input-group">
									<span className="input-group-addon"><i className={icon6}></i></span>
									<input type="text" id={id} data-lang={en} data-large-mode={mode} data-min-year={min} data-max-year={max} data-disabled-days={days} data-id={dataId} data-theme={dataTheme} className="form-control" readOnly={rO} placeholder={ph6}></input>
								</div>	
							</div>
						</form>
        </>
    )
}

const FullDetail2 = () =>{
    return (
        <>
        <form>
			<h2 className="detail-title">Job Requirement</h2>
				<div className="col-md-12 col-sm-12">
					<textarea className="form-control textarea" placeholder="About Company"></textarea>
				</div>	
				<div className="col-md-12 col-sm-12">
					<button className="btn btn-success btn-primary small-btn">Submit your company</button>	
				</div>	
		</form>
        </>
    )
}

export {FullDetail1,FullDetail2}