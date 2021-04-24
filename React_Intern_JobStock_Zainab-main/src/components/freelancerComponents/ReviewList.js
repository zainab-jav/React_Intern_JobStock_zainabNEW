import React from "react";

const ReviewList = ({imgSrc, clientName, tagline, time, message}) => {
    return(
        <div class="review-list">
            <div className="review-thumb">
                <img src={imgSrc} className="img-responsive img-circle"
                     alt=""/>
            </div>
            <div className="review-detail">
                <h4>{clientName} <span>{time}</span></h4>
                <span className="re-designation">{tagline}</span>
                <p>{message}</p>
            </div>
            </div>
    );
}
export default ReviewList