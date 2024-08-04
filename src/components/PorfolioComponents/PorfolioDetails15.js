import React from "react";
import { useEffect, useState } from "react";
import "./PortfolioDetails.css";
import data from "../../pages/portfolio/projectsData.json";

function PortfolioDetails15() {
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
            <h4 className="description">
              We made this project to deal with one very crucial issue we discovered. In today's world most of te study is getting towards online mode. In online study the process is very similar. It can be a recorded lecture or a live class. We in this project are focussing on the attention of the student in the work he is doing. Which means we are taking snapshots of the students who are watching the online course and we are using some ML models to determine their emotions. Then we are filtering the emotions in two categories, either they are positive or they are negative. Then we are determining that if the student is not feeling very confident we are offering him some fun educational games that can refresh their mind. 
            </h4>

            <div>
              <img
                className="pc-image"
                src="../projectImages/portfolio15-images/1.png"
                alt="image"
              />
            </div>

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

export default PortfolioDetails15;
