import React from "react";
import { useEffect, useState } from "react";
import "./PortfolioDetails.css";
import data from "../../pages/portfolio/experiencedata.json";

// Vimo Intern
function PortfolioDetails5() {
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
                  Served as an <strong>SDE Intern at Vimo India Pvt Ltd</strong>
                  , where I focused on enhancing the application’s security by
                  identifying and eliminating potential threats and
                  vulnerabilities.
                </li>
                <li>
                  Upgraded outdated dependencies to modern versions,
                  significantly boosting the application’s overall performance
                  and security posture.
                </li>
                <li>
                  Contributed to key infrastructure improvements by migrating
                  critical third-party packages to internal modules and
                  developing new features to support product growth.
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

export default PortfolioDetails5;
