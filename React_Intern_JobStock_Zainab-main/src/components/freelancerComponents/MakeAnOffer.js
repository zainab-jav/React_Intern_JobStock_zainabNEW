import React from "react"

const MakeAnOffer = ({data}) => {
  const {name,profile,job,skills,rate,jobsDone,rehired,online} = data
    return (
        <div className="sidebar-container">
            <div className="sidebar-box">
                {online && <span className="sidebar-status">Available</span>}
                <h4 className="flc-rate">${rate}/hr</h4>
                <div className="sidebar-inner-box">
                    <div className="sidebar-box-thumb">
                        <img src={profile} className="img-responsive img-circle" alt=""/>
                    </div>
                    <div className="sidebar-box-detail">
                        <h4>{name}</h4>
                        <span className="desination">{job}</span>
                    </div>
                </div>
                <div className="sidebar-box-extra">
                <ul>
										<li>{skills[0]}</li>
										<li>{skills[1]}</li>
										<li>{skills[2]}</li>
										<li className="more-skill bg-primary">+{skills.length-3}</li>
									</ul>
                    <ul className="status-detail">
                        <li className="br-1"><strong>{rate}</strong>Hourly Rate</li>
                        <li className="br-1"><strong>{jobsDone} Jobs</strong>Done job</li>
                        <li><strong>{rehired}</strong>Rehired</li>
                    </ul>
                </div>
            </div>
            <a href="#" className="btn btn-sidebar bt-1 bg-success">Make An Offer</a>
        </div>
    );
}
export default MakeAnOffer