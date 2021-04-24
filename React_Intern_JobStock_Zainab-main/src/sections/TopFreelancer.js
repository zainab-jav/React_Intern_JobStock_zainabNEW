import React from "react";
import TopFreeLancerCard from "../components/TopFreeLancerCard";
import {kData} from "../data/details";

const TopFreeLancer = () => {
    return(
        <section className="pricing">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-heading">
                            <p>Top Freelancer</p>
                            <h2>Hire Expert <span>Freelancer</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <TopFreeLancerCard classname={kData[0].classname} stat={kData[0].stat} price={kData[0].price} pic={kData[0].pic} nation={kData[0].nation}/>
                    <TopFreeLancerCard classname={kData[1].classname} stat={kData[1].stat} price={kData[1].price} pic={kData[1].pic} nation={kData[1].nation}/>
                    <TopFreeLancerCard classname={kData[2].classname} stat={kData[2].stat} price={kData[2].price} pic={kData[2].pic} nation={kData[2].nation}/>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="text-center">
                            <a href="freelancers-2.html" className="btn btn-primary">Load More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TopFreeLancer