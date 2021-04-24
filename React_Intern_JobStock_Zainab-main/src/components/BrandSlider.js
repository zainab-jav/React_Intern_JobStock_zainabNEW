import React from "react"
import BannerCard from "./BannerCard";
import OwlCarousel from "react-owl-carousel"
import A from "../img/microsoft-home.png"
import B from "../img/img-home.png"
import C from "../img/mothercare-home.png"
import D from "../img/paypal-home.png"
import E from "../img/serv-home.png"
import F from "../img/xerox-home.png"
import G from "../img/yahoo-home.png"
import H from "../img/mothercare-home.png"
const BrandSlider = ()=> {
  return(
    <div className="company-brand">
                <div className="container">
                    <OwlCarousel id="company-brands" smartSpeed={350} className="owl-theme" items={3} autoplay  margin={5} loop>

                        <BannerCard pic={A}/>
                        <BannerCard pic={B}/>
                        <BannerCard pic={C}/>
                        <BannerCard pic={D}/>
                        <BannerCard pic={E}/>
                        <BannerCard pic={F}/>
                        <BannerCard pic={G}/>
                        <BannerCard pic={H}/>

                    </OwlCarousel>
                </div>
            </div>
  )
}
export default BrandSlider