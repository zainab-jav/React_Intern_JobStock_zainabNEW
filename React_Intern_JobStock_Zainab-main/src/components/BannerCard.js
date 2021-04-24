import React from 'react';

const BannerCard = ({pic}) => {
    return (
        <div className="brand-img">
            <img src={pic} className="img-responsive" alt=""/>
        </div>
    )
}
export default BannerCard