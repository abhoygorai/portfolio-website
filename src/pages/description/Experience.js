import { useParams } from "react-router-dom";
import "./exp.css"
import experienceData from "../portfolio/experiencedata.json";
import ExperienceComp from "../../components/ExperienceComp";

function Experience() {
  const param = useParams("id");
  const data = experienceData.filter(function (el) {
    return (
      el.id == param.id
    );
  })[0];

  console.log(data);
  return (
    <>
      <ExperienceComp
      title = {data.title}
      company = {data.company}
      image = {"../../"+data.image}
      description = {data.description}
      technologies = {data.technologies}
      proof={"../../"+data.proof}
      />
    </>
  );
}

export default Experience;
