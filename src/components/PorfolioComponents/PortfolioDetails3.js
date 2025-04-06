import React from "react";
import { useEffect, useState } from "react";
import "./PortfolioDetails.css";
import data from "../../pages/portfolio/experiencedata.json";

// Intel Mentor
function PortfolioDetails3() {
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
                Mentored school students under the{" "}
                <strong>Intel AI for Youth</strong> program, introducing
                foundational concepts in Artificial Intelligence and Machine
                Learning through hands-on activities and real-world examples.
              </li>
              <li>
                Successfully hosted a workshop attended by{" "}
                <strong>150+ students</strong>, focusing on nurturing curiosity
                and AI readiness among young minds.
              </li>
              <li>
                Conducted a dedicated awareness session for{" "}
                <strong>school staff and educators</strong>, highlighting the
                importance of AI education at the school level and empowering
                them to support student learning in this field.
              </li>
            </ol>
            <h4 className="description"></h4>
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

export default PortfolioDetails3;
