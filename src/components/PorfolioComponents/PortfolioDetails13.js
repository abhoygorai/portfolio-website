import React from "react";
import { useEffect, useState } from "react";
import "./PortfolioDetails.css";
import data from "../../pages/portfolio/projectsData.json";

function PortfolioDetails13() {
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const index = 2;

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = "../" + data[index].proof;
    link.download = data[index].title + ".pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

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
            <h4 className="description">
              It was our semester minor project. Our goal is to give a solution that can give a idea of a foods that they can consume within a calory limit. 
            </h4>

            <div>
              <img
                className="pc-image"
                src="../projectImages/portfolio13-images/1.png"
                alt="image"
              />
               <img
                className="pc-image"
                src="../projectImages/portfolio13-images/2.png"
                alt="image"
              />
               <img
                className="pc-image"
                src="../projectImages/portfolio13-images/3.png"
                alt="image"
              />
            </div>

            <h4 className="description">
              This project is developed using ReactJs framework for the frontend and ExpressJs for backend. 
            </h4>
          </div>
          <div className="dowload-button-div">
            <a
              className="btn"
              href="https://github.com/abhoygorai/health-app-2-frontend"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Code
            </a>
            <a
              className="btn"
              href="https://github.com/abhoygorai/diet-app-backend"
              target="_blank"
              rel="noreferrer"
            >
              Backend Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioDetails13;
