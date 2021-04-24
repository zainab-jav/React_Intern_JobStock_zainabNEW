import React from "react";
import OurStoriesCard from "../components/OurStoriesCard";
import { MData } from "../data/details"
import OwlCarousel from "react-owl-carousel"



const OurStories = () => {
const w = window.visualViewport.width
console.log(w)
    return (
        <section className="testimonial" id="testimonial">
            <div className="container">
                <div className="row">
                    <div className="main-heading">
                        <p>What Say Our Client</p>
                        <h2>Our Success <span>Stories</span></h2>
                    </div>
                </div>
                    <div className="row">
                    <OwlCarousel id="client-testimonial-slider" className="owl-theme owl-dots " items={w <= 900? w <= 500? 1 :2 :3} >
                        {MData.map((data,key)=>{
                          const {pic,name} = data
                          return(
                            <OurStoriesCard key={key} pic={pic} name={name}/>
                          )
                        })}
                    </OwlCarousel>
                    </div>
            </div>
        </section>
    )
}
export default OurStories