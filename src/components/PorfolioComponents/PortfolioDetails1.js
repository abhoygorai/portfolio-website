import React from "react";
import { useEffect, useState } from "react";
import "./PortfolioDetails.css";
import data from "../../pages/portfolio/experiencedata.json";

// IEE Project Intern
function PortfolioDetails1() {
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const index = 0;

  // const handleDownload = () => {
  //   setDownloading(true);
  //   const link = document.createElement("a");
  //   link.href = "../" + data[index].proof;
  //   link.download = data[index].title + ".pdf";
  //   link.onload = () => {
  //     link.remove();
  //     setDownloading(false);
  //   };
  //   document.body.appendChild(link);
  //   link.click();
  // };

  return (
    <>
      <div className="container-lg">
        <div className="container-inside d-flex justify-content-between">
          <div className="image-title-div">
            <img
              className="company-image mx-auto"
              src={"../" + data[index].image}
              alt="logo"
            />

            <div className="title-text-div">
              <h4 className="company">{data[index].company}</h4>
              <h2 className="title">{data[index].title}</h2>
              <h4 className="technologies-text">{data[index].technologies}</h4>
            </div>
          </div>
          <div className="description-text-div">
            <ol>
              <li>
                Developed an ML-powered web application to detect and visualize
                pollen density across cities in India.
              </li>
              <li>
                Integrated machine learning models to analyze environmental and
                climatic data for accurate pollen predictions.
              </li>
              <li>
                Designed an interactive UI to display real-time pollen
                percentage, helping allergy-prone users make informed decisions.
              </li>
            </ol>
            <h4 className="description"></h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioDetails1;
