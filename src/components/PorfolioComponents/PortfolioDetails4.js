import React from "react";
import { useEffect, useState } from "react";
import "./PortfolioDetails.css";
import data from "../../pages/portfolio/experiencedata.json";

function PortfolioDetails2() {
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const index = 3;

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
                Developed an admin dashboard for one of the biggest NFT
                Marketplaces in India. This admin panel will be used by the
                marketplace admin to launch and manage the NFTs in the market.
              </li>
              <li>
                Developed a MERN stack E-Commerce platform for event ticket
                purchasing. This application will be used to book tickets for
                different types of events. Users can also register for their
                events and sell the tickets on that website. More than 4000
                tickets were booked after deployment.
              </li>
              <li>
                Worked in the team developing an internal management system for
                a company which helped them to manage their accounting
                information.
              </li>
            </ol>
            <h4 className="description"></h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioDetails2;
