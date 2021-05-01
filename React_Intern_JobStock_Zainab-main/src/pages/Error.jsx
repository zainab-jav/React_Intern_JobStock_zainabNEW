import React from 'react';
import ReactDOM from "react-dom";
import logo from "./../img/logo.png";
import {Link} from "react-router-dom";
import Navbar from "./../components/Navbar";

const Error =() =>{
    return (
        <>
		<Navbar/>
		
        <section className="simple-bg-screen big-wrap">
				<div className="container">
					<div className="error-page">
						<h2>4<span>0</span>4</h2>
						<p>Oops...looks like we got lost</p> 
						
					    <button className="btn btn-success small-btn"><Link> Let's Go Home </Link></button>
					    
						
					</div>
				</div>
		</section>
		
           
           
        </>
    )
}
export default Error