import React from "react";
import { useEffect, useState } from "react";
import "./PortfolioDetails.css";
import data from "../../pages/portfolio/projectsData.json";

function PortfolioDetails17() {
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const index = 6;

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
            I developed a full stack web application for data visualization, featuring robust authentication to ensure secure user access. Users can apply various filters, such as keywords and timestamps, to customize their data views. The data is displayed in a paginated format, enhancing readability and navigation. The application demonstrates a smooth user experience with a demo of the login page and the main table page, showcasing the intuitive design and functionality.
            </h4>
            
            <h4 className="description">
                Here is the login and signup page
            </h4>

            <div>
              <img
                className="pc-image"
                src="../projectImages/portfolio17-images/1.png"
                alt="image"
              />
            </div>

            <h4 className="description">
                Here is the main console that is used form visualization.
            </h4>

            <div>
              <img
                className="pc-image"
                src="../projectImages/portfolio17-images/2.png"
                alt="image"
              />
            </div>

            <h4 className="description">
                This project utilizes modern technologies and frameworks to provide a powerful, user-friendly data visualization tool.
            </h4>

          </div>
          <div className="dowload-button-div">
            <a
              className="btn"
              href="https://github.com/abhoygorai/hackmon-bitsInBinary"
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

export default PortfolioDetails17;
