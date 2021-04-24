import React from "react"

const SimilarProfile = ({ImgSrc, name, designation, occupation}) => {
    return (
        <>
            <div className="member-profile-list">
                <div className="member-profile-thumb">
                    <a href="company-detail.html"><img src={ImgSrc}
                                                       className="img-responsive img-circle"
                                                       alt=""/></a>
                </div>
                <div className="member-profile-detail">
                    <h4><a href="company-detail.html">{name}</a></h4>
                    <span>{designation}</span>
                    <span className="cl-success">{occupation}</span>
                </div>
            </div>
        </>
    );
}
export default SimilarProfile