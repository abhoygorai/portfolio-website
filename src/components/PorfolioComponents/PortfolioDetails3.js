import React from "react";
import { useEffect, useState } from "react";
import "./PortfolioDetails.css";
import data from "../../pages/portfolio/experiencedata.json"

function PortfolioDetails2() {
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
              src= {"../" + data[index].image}
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
                I was responsible for designing and making all the graphical content.
              </li>
              <li>
                I was working with the marketting team which increased our company reach and helped to build a web3 based community.
              </li>
            </ol>

            <h4 className="description">Some of my work</h4>
            <div className="description-images">
              <img src="../projectImages/portfolio3-images/1.png" />
              <img src="../projectImages/portfolio3-images/2.png" />
              <img src="../projectImages/portfolio3-images/3.png" />
              <img src="../projectImages/portfolio3-images/4.png" />
              <img src="../projectImages/portfolio3-images/5.png" />
              <img src="../projectImages/portfolio3-images/6.png" />
            </div>
          </div>
          <div className="dowload-button-div">
            {data[index].proof === "../../" ? (
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

export default PortfolioDetails2;
