import React from "react";
import { useEffect, useState } from "react";
import "./PortfolioDetails.css";
import data from "../../pages/portfolio/projectsData.json";

function PortfolioDetails13() {
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const index = 3;

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
              This project is one of my very first website I made. It was a blog website of me where I can post my own blogs. I made this project using NodeJs and EJS. It is connected wiht MongoDB Atlas which is a cloud based database.  
            </h4>

            <div>
              <img
                className="pc-image"
                src="../projectImages/portfolio14-images/1.png"
                alt="image"
              />
            </div>

            <h4 className="description">
              This page will contain all my blogs and I made a separate page that will be used to push the blogs in the main site.
            </h4>

            <div>
              <img
                className="pc-image"
                src="../projectImages/portfolio14-images/2.png"
                alt="image"
              />
            </div>
          </div>
          <div className="dowload-button-div">
            <a
              className="btn"
              href="https://github.com/abhoygorai/blogwebsite"
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

export default PortfolioDetails13;
