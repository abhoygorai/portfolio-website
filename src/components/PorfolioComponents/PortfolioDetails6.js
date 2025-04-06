import React from "react";
import { useEffect, useState } from "react";
import "./PortfolioDetails.css";
import data from "../../pages/portfolio/experiencedata.json";

// Vimo Intern
function PortfolioDetails6() {
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const index = 4;

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
            <ol>
              <ul>
                <li>
                  Currently working as an{" "}
                  <strong>
                    Associate Software Engineer at Vimo India Pvt Ltd
                  </strong>
                  , playing a key role in major infrastructure upgrades and
                  application modernization.
                </li>
                <li>
                  Actively involved in migrating legacy codebase from AngularJS
                  to ReactJS, improving code maintainability, performance, and
                  developer experience.
                </li>
                <li>
                  Designed and implemented new features that address real-world
                  healthcare challenges, contributing directly to improving
                  patient and provider experiences.
                </li>
              </ul>
            </ol>
          </div>
          <div className="dowload-button-div">
            {data[index].proof === "" ? (
              ""
            ) : (
              <button
                className="btn"
                onClick={handleDownload}
                disabled={downloading}
              >
                Download proof
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioDetails6;
