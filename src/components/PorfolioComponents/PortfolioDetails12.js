import React from "react";
import { useEffect, useState } from "react";
import "./PortfolioDetails.css";
import data from "../../pages/portfolio/projectsData.json";

function PortfolioDetails12() {
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const index = 1;

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
              This project was a desktop application that was used to convert
              images to pdf. The motivation behind this project was my brother.
              He used to do this conversion a lot in his work using some free
              online web applications. But he wanted a solution that can do that
              without internet and without any size limitation.
            </h4>

            <div>
              <img
                className="pc-image"
                src="../projectImages/portfolio12-images/1.png"
                alt="image"
              />
            </div>

            <h4 className="description">
              I used ElectronJs to develop this simple app. It was focused on a
              single purpose but solving a real problem.
            </h4>
          </div>
          <div className="dowload-button-div">
            <a
              className="btn"
              href="https://github.com/abhoygorai/jpg-to-pdf-application"
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

export default PortfolioDetails12;
