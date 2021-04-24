import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function App(props) {
    
    return (
        <>
                <div className="col-md-4 col-sm-4">
                    <div className="pr-table">
                        <div className={`pr-header ${props.active}`}>
                            <div className="pr-plan">
                                <h4>{props.plan}</h4>
                            </div>
                            <div className="pr-price">
                                <h3><sup>$</sup>{props.price}<sub>/Mon</sub></h3>
                            </div>
                        </div>
                        <div className="pr-features">
                            <ul>
                                {
                                    props.features.map((v, i) => {
                                        return (
                                            <li key={i}>{v}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="pr-buy-button">
                            <Link to="#" className="pr-btn" title="Price Button">Get Started</Link>
                        </div>
                    </div>
                </div>
=        </>
    )
}