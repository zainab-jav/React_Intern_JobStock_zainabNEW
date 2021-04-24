import React from "react";

const JobCard = ({ pic, heading, word, icon, Job,jobType, location, price,premium }) => {
  return (
    <>
      <div className="col-md-3 col-sm-6">
        <div className="grid-view brows-job-list">
          <div className="brows-job-company-img">
            <img src={pic} className="img-responsive" alt="" />
          </div>
          <div className="brows-job-position">
            <h3>
              <a href="job-detail.html">{heading}</a>
            </h3>

            <p>
              <span>{word}</span>
            </p>
          </div>
          <div className="job-position">
            <span className="job-num">{icon}</span>
          </div>
          <div className="brows-job-type">
            <span className={jobType}>{Job}</span>
          </div>
          <ul className="grid-view-caption">
            <li>
              <div className="brows-job-location">
                <p>
                  <i className="fa fa-map-marker"></i>
                  {location}
                </p>
              </div>
            </li>
            <li>
              <p>
                <span className="brows-job-sallery">
                  <i className="fa fa-money"></i>
                  {price}
                </span>
              </p>
            </li>
          </ul>
          {premium && <span class="tg-themetag tg-featuretag">Premium</span>}
        </div>
      </div>
    </>
  );
};
export default JobCard;
