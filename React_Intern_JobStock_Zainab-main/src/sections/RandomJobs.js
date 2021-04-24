import React from "react";
import JobCard from "../components/JobCard";

import com1 from "../img/com-1.jpg";
import com2 from "../img/com-2.jpg";
import com3 from "../img/com-3.jpg";
import com4 from "../img/com-4.jpg";
import com5 from "../img/com-5.jpg";
import com6 from "../img/com-6.jpg";
import com7 from "../img/com-7.jpg";

const RandomJobs = () => {
  const detail = [
    {
      pic: com1,
      heading: "Web Developer",
      word: "Google",
      icon: "5 Position",
      Job: "Part Time",
      location: "QBL Park, C40",
      price: "$110 - 200",
      premium: false,
      jobType: "part-time"
    },
    {
      pic: com2,
      heading: "Web Developer",
      word: "Google",
      icon: "5 Position",
      Job: "Freelancer",
      location: "QBL Park, C40",
      price: "$110 - 200",
      premium: false,
      jobType: "freelanc"
    },
    {
      pic: com3,
      heading: "Web Developer",
      word: "Google",
      icon: "5 Position",
      Job: "Enternship",
      location: "QBL Park, C40",
      price: "$110 - 200",
      premium: true,
      jobType: "enternship"
    },
    {
      pic: com4,
      heading: "Web Developer",
      word: "Google",
      icon: "5 Position",
      Job: "Full Time",
      location: "QBL Park, C40",
      price: "$110 - 200",
      premium: false,
      jobType: "full-time"
    },
    {
      pic: com5,
      heading: "Web Developer",
      word: "Google",
      icon: "5 Position",
      Job: "Part Time",
      location: "QBL Park, C40",
      price: "$110 - 200",
      premium: false,
      jobType: "part-time"
    },
    {
      pic: com6,
      heading: "Web Developer",
      word: "Google",
      icon: "5 Position",
      Job: "freelance",
      location: "QBL Park, C40",
      price: "$110 - 200",
      premium: true,
      jobType: "freelanc"
    },
    {
      pic: com7,
      heading: "Web Developer",
      word: "Google",
      icon: "5 Position",
      Job: "Entership",
      location: "QBL Park, C40",
      price: "$110 - 200",
      premium: false,
      jobType: "enternship"
    },
    {
      pic: com1,
      heading: "Web Developer",
      word: "Google",
      icon: "5 Position",
      Job: "Full Time",
      location: "QBL Park, C40",
      price: "$110 - 200",
      premium: false,
      jobType: "full-time"
    }
  ];

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="main-heading">
              <p>200 New Jobs</p>

              <h2>
                New & Random <span>Jobs</span>
              </h2>
            </div>
          </div>
          <div className="row extra-mrg">
            {detail.map((data) => {
              const {
                pic,
                heading,
                word,
                icon,
                Job,
                location,
                price,
                jobType,
                premium
              } = data;
              return (
                <JobCard
                  key={pic}
                  pic={pic}
                  heading={heading}
                  word={word}
                  icon={icon}
                  Job={Job}
                  location={location}
                  price={price}
                  premium={premium}
                  jobType={jobType}
                />
              );
            })}
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  );
};
export default RandomJobs;
