import React from 'react';


import bannerbgImg from "../img/banner-9.jpg"
import BrandSlider from './BrandSlider';

const SearchBar = () => {
    return (
      <>
        <div className="banner" style={{backgroundImage:`url(${bannerbgImg})`}}>
            <div className="container">
                <div className="banner-caption">
                    <div className="col-md-12 col-sm-12 banner-text">
                        <h1>7,000+ Browse Jobs</h1>
                        <form className="form-horizontal">
                            <div className="col-md-4 no-padd">
                                <div className="input-group">
                                    <input type="text" className="form-control right-bor" id="joblist" placeholder="Skills, Designations, Companies"/>
                                </div>
                            </div>
                            <div className="col-md-3 no-padd">
                                <div className="input-group">
                                    <input type="text" className="form-control right-bor" id="location" placeholder="Search By Location.."/>
                                </div>
                            </div>
                            <div className="col-md-3 no-padd">
                                <div className="input-group">
                                    <select id="choose-city" className="form-control">
                                        <option>Choose City</option>
                                        <option>Chandigarh</option>
                                        <option>London</option>
                                        <option>England</option>
                                        <option>Pratapcity</option>
                                        <option>Ukrain</option>
                                        <option>Wilangana</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2 no-padd">
                                <div className="input-group">
                                    <button type="submit" className="btn btn-primary">Search Job</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <BrandSlider />
        </div>
        <div class="clearfix"></div>
        </>
    )
}
export default SearchBar