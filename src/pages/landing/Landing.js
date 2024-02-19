import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Draw from "../../components/Draw";
import SocialIcons from "../../components/SocialIcons";
import "./landing.css";

const Landing = ({ name }) => {
  return (
    <section className="landing">
      <div className="textContainer">
        <h1 className="name">
          Abhoy Gorai
        </h1>
        <h1 className="name">
          Abhoy Gorai
        </h1>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Landing;
