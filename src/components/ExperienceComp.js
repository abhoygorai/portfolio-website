import { useState, useEffect } from "react";

function ExperienceComp({
  title,
  company,
  image,
  description,
  technologies,
  proof,
}) {
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = proof;
    link.download = title + ".pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };
  console.log(proof);
  return (
    <>
      <div className="container-lg">
        <div className="container-inside d-flex justify-content-between">
          <div className="image-title-div">
            
            <img
              className="company-image mx-auto"
              src={image}
              alt="company-image"
            />

            <div className="title-text-div">
              <h4 className="company">{company}</h4>
              <h2 className="title">{title}</h2>
              <h4 className="technologies-text">{technologies}</h4>
            </div>
          </div>
          <div className="description-text-div">
            <h4 className="description">{description}</h4>
          </div>
          <div className="dowload-button-div">
            {proof === "../../" ? (
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

export default ExperienceComp;
