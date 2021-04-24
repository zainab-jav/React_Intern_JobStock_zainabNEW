import React from "react";

const TopFreeLancerCard = ({classname,stat,price,pic,nation}) => {
    return(
        <div className="col-md-4 col-sm-6">
            <div className="freelance-container style-2">
                <div className="freelance-box">
                    <span className={classname}>{stat}</span>
                    <h4 className="flc-rate">{price}</h4>

                    <div className="freelance-inner-box">
                        <div className="freelance-box-thumb">
                            <img src={pic} className="img-responsive img-circle" alt=""/>
                        </div>
                        <div className="freelance-box-detail">
                            <h4>Agustin L. Smith</h4>
                            <span className="location">{nation}</span>
                        </div>
                        <div className="rattings">
                            <i className="fa fa-star fill"> </i>
                            <i className="fa fa-star fill"> </i>
                            <i className="fa fa-star fill"> </i>
                            <i className="fa fa-star-half fill"> </i>
                            <i className="fa fa-star"> </i>
                        </div>
                    </div>
                    <div className="freelance-box-extra">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui.</p>
                        <ul>
                            <li>Php</li>
                            <li>Android</li>
                            <li>Html</li>
                            <li className="more-skill bg-primary">+3</li>
                        </ul>
                    </div>
                    <a href="#" className="btn btn-freelance-two bg-default">View Detail</a>
                    <a href="#" className="btn btn-freelance-two bg-info">View Detail</a>
                </div>
            </div>
        </div>
    )
}
export default TopFreeLancerCard