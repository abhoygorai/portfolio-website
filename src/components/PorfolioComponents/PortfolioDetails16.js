import React from "react";
import { useEffect, useState } from "react";
import "./PortfolioDetails.css";
import data from "../../pages/portfolio/projectsData.json";

function PortfolioDetails16() {
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const index = 5;

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
            I developed the backend for a social media platform featuring robust authentication and authorization, ensuring secure access to user-specific functionalities. The platform supports full content management capabilities, enabling users to create, edit, and delete posts, as well as handle media uploads. User interactions are enhanced with features such as liking, commenting, and a follow system, all of which boost engagement and community building. Security measures, including data encryption and rate limiting, ensure the protection of user data and the prevention of abuse. The project leveraged technologies like Node.js, Django, Spring Boot, PostgreSQL, and MongoDB, resulting in a secure, scalable, and interactive platform. 
            </h4>
            <br></br>
            <h4 className="description">
                This was a part a task that was given by Toddle company as a part of their placement program. The link of the task is <a href="https://github.com/abhoygorai/social-media-backend/blob/master/Task-details.pdf" target="_blank">here</a>
            </h4>

            {/* <div>
              <img
                className="pc-image"
                src="../projectImages/portfolio15-images/1.png"
                alt="image"
              />
            </div> */}

          </div>
          <div className="dowload-button-div">
            <a
              className="btn"
              href="https://github.com/abhoygorai/social-media-backend"
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

export default PortfolioDetails16;
