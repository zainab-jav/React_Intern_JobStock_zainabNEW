import React from "react"

const ClientProfile = ({img,name,designation,post,like,share,online}) => {
    return (
        <>
            <section className="detail-desc advance-detail-pr gray-bg">
                <div className="container white-shadow">
                    <div className="row">
                        <div className="detail-pic"><img src={ img } className="img" alt="" /><a href="#" className="detail-edit" title="edit"><i className="fa fa-pencil"></i></a></div>
                        {online && <div className="detail-status"><span>Active Now</span></div>}
                    </div>

                    <div className="row bottom-mrg">
                        <div className="col-md-12 col-sm-12">
                            <div className="advance-detail detail-desc-caption">
                                <h4>{name}</h4><span className="designation">{designation}</span>
                                <ul>
                                    <li><strong className="j-view">{post}</strong>Job Post</li>
                                    <li><strong className="j-applied">{like}</strong>Job Like</li>
                                    <li><strong className="j-shared">{share}</strong>Job Shared</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row no-padd">
                        <div className="detail pannel-footer">
                            <div className="col-md-5 col-sm-5">
                                <ul className="detail-footer-social">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            <div className="col-md-7 col-sm-7">
                                <div className="detail-pannel-footer-btn pull-right"><a href="javascript:void(0)" data-toggle="modal" data-target="#apply-job" className="footer-btn grn-btn" title="">Edit Now</a><a href="#" className="footer-btn blu-btn" title="">Save Draft</a></div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default ClientProfile;

