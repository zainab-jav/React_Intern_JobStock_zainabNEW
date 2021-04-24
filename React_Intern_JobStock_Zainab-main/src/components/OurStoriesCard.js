import React from 'react'

const OurStoriesCard = ({pic,name}) => {
    return(
        <div className="client-testimonial">
            <div className="pic">
                <img src={pic} alt=""/>
            </div>
            <p className="client-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor et dolore magna aliqua.</p>
            <h3 className="client-testimonial-title">{name}</h3>
            <ul className="client-testimonial-rating">
                <li className="fa fa-star-o"> </li>
                <li className="fa fa-star-o"> </li>
                <li className="fa fa-star"> </li>
            </ul>
        </div>

    )
}

export default OurStoriesCard