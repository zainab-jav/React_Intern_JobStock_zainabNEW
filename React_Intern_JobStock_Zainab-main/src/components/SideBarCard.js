import React from "react";

function SideBarCard({ date, img, header }) {
  return (
    <>
      <div className="blog-item">
        <div className="post-thumb">
          <a href="blog-detail.html">
            <img src={img} className="img-responsive" alt="" />
          </a>
        </div>
        <div className="blog-detail">
          <a href="#">
            <h4>{header}</h4>
          </a>
          <div className="post-info">{date}</div>
        </div>
      </div>
    </>
  );
}

export default SideBarCard;
