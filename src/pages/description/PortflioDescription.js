import { useParams } from "react-router-dom";
import "./exp.css"
import experienceData from "../portfolio/experiencedata.json";
// import ExperienceComp from "../../components/ExperienceComp";
import PortfolioDetails1 from "../../components/PorfolioComponents/PortfolioDetails1";
import PortfolioDetails2 from "../../components/PorfolioComponents/PortfolioDetails2";
import PortfolioDetails3 from "../../components/PorfolioComponents/PortfolioDetails3"
import PortfolioDetails4 from "../../components/PorfolioComponents/PortfolioDetails4"
import PortfolioDetails11 from "../../components/PorfolioComponents/PortfolioDetails11";
import PortfolioDetails12 from "../../components/PorfolioComponents/PortfolioDetails12";
import PortfolioDetails13 from "../../components/PorfolioComponents/PortfolioDetails13";
import PortfolioDetails14 from "../../components/PorfolioComponents/PortfolioDetails14"
import PortfolioDetails15 from "../../components/PorfolioComponents/PorfolioDetails15"

function PortflioDescription() {
  const param = useParams("id");
  const data = experienceData.filter(function (el) {
    return (
      el.id == param.id
    );
  })[0];

  const compTracker = {
    // experiences
    1: <PortfolioDetails1 />,
    2: <PortfolioDetails2 />,
    3: <PortfolioDetails3 />,
    4: <PortfolioDetails4 />,

    // projects
    11: <PortfolioDetails11 />,
    12: <PortfolioDetails12 />,
    13: <PortfolioDetails13 />,
    14: <PortfolioDetails14 />,
    15: <PortfolioDetails15 />,
  }

  console.log(data);
  return (
    <>
      {/* <ExperienceComp
      title = {data.title}
      company = {data.company}
      image = {"../../"+data.image}
      description = {data.description}
      technologies = {data.technologies}
      proof={"../../"+data.proof}
      /> */}

      {compTracker[param.id]}
    </>
  );
}

export default PortflioDescription;