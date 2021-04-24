import React from "react";
import blog1 from "../img/blog/1.jpg";
import blog2 from "../img/blog/2.jpg";
import blog3 from "../img/blog/3.jpg";
import SideBarCard from "../components/SideBarCard";
const SideBar = () => {
  const sideBarData = [
    {
      date: "Aug 10 2016",
      img: blog1,
      header: "Enim Ad Minim Veniam, Quis Nostrud Exercitation"
    },
    {
      date: "Aug 10 2016",
      img: blog2,
      header: "Enim Ad Minim Veniam, Quis Nostrud Exercitation"
    },
    {
      date: "Aug 10 2016",
      img: blog3,
      header: "Enim Ad Minim Veniam, Quis Nostrud Exercitation"
    }
  ];
  return (
    <div className="col-md-4">
      <div className="blog-sidebar">
        <form action="#">
          <div className="search-form">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search…"
              />
              <span className="input-group-btn">
                <button type="button" className="btn btn-default">
                  Go
                </button>
              </span>
            </div>
          </div>
        </form>
        <div className="sidebar-widget">
          <h4>Popular Category</h4>
          <ul className="sidebar-list">
            <li>

              <a href="#">
                About Donation <span>(8)</span>
              </a>
            </li>
            <li>
              <a href="#">
                About Donation <span>(8)</span>
              </a>
            </li>
            <li>
              <a href="#">
                About Donation <span>(8)</span>
              </a>
            </li>
            <li>
              <a href="#">
                About Donation <span>(8)</span>
              </a>
            </li>
            <li>
              <a href="#">
                About Donation <span>(8)</span>
              </a>
            </li>
            <li>
              <a href="#">
                About Donation <span>(8)</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar-widget">
          <h4>Popular Category</h4>
          {sideBarData.map((data) => {
            const { date, img, header } = data;
            return (
              <SideBarCard key={date} date={date} img={img} header={header} />
            );
          })}

          <div className="sidebar-widget">
            <h4>Recent Category</h4>
            {sideBarData.map((data) => {
              const { date, img, header } = data;
              return (
                <SideBarCard key={date} date={date} img={img} header={header} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
