import React from "react"
import img1 from "../img/gtrr.jpg"

const HeroBanner =() => {
    return (
        <div>
            <div className="hero-banner" data-ride="carousel" data-pause="hover" data-interval="false">
                <div className="hero-img">
                    <img src={img1} className="img-responsive" alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col col-md-6 col-sm-8">
                            <div className="content">
                                <h2>Talent? <br/> Meet Opportunity.</h2>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                    voluptatum deleniti atque corrupti quos dolores et quas</p>
                                <form className="banner-form" data-animation="animated fadeInUp">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search For..."/>
										<span className="input-group-btn">
											<button type="button" className="btn bg-success">Go & Search</button>
										</span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"> </div>
        </div>
);
}
export default HeroBanner