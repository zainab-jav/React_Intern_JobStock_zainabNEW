import React from "react"
import FreelancerInnerHeader from "../sections/FreelancerInnerHeader";
import DetailFreelancer from "../sections/DetailFreelancer";
import Footer from "../sections/Footer";

const FreelancerDetail = ({data}) => {
    return (
        <>
            <FreelancerInnerHeader data={data}/>
            <DetailFreelancer data={data}/>
            <Footer />
        </>
    );
}
export default FreelancerDetail