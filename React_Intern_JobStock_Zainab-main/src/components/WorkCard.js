import React from "react";

const WorkCard = ({span, icon, description, heading}) => {
  return (
    <div className="col-md-4 col-sm-4">
                    <div className="working-process">
                        <span className="process-img"><img src={icon} className="img-responsive" alt=""/><span
                                className="process-num">0{span}</span></span>
                        <h4>{heading}</h4>

                        <p>{description}</p>
                    </div>
                </div>
  );
};

export default WorkCard;
