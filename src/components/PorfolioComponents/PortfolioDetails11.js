import React from "react";
import { useEffect, useState } from "react";
import "./PortfolioDetails.css";
import data from "../../pages/portfolio/projectsData.json";

function PortfolioDetails11() {
  const index = 0;

  const nagigateToLink = () => {
    window.open(
      "http://www.google.com",
      "_blank",
      "toolbar=0,location=0,menubar=0"
    );
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
              The project is focused on solving one very crucial problem I faced
              in my Hostel. The process of generating outpass was very long and
              it takes almost 10 min to make a pass for a single person. I
              thought of making a project that will make the process fully
              digital.
            </h4>
            <h5>Screenshots</h5>
            <img
              className="pc-image"
              src="../projectImages/portfolio11-images/1.png"
              alt="image"
            />
            <img
              className="pc-image"
              src="../projectImages/portfolio11-images/3.png"
              alt="image"
            />
            <h4 className="description">
              The project is focused on solving one very crucial problem I faced
              in my Hostel. The process of generating outpass was very long and
              it takes almost 10 min to make a pass for a single person. I
              thought of making a project that will make the process fully
              digital.
            </h4>
            <div>
              <img
                className="mb-image"
                src="../projectImages/portfolio11-images/4.png"
                alt="image"
              />
              <img
                className="mb-image"
                src="../projectImages/portfolio11-images/5.png"
                alt="image"
              />
              <img
                className="mb-image"
                src="../projectImages/portfolio11-images/6.png"
                alt="image"
              />
            </div>
            <h4 className="description">
              Feel free to email me if you want this type of software for your
              needs. Open for freelancing.
            </h4>
          </div>
          <div className="dowload-button-div">
            <a
              className="btn"
              href="https://github.com/abhoygorai/HostelProject-backend"
              target="_blank"
              rel="noreferrer"
              
            >
              GitHub Link
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioDetails11;
