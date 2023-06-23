import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "../../images/me.svg";
import Draw from "../../components/Draw";
import SocialIcons from "../../components/SocialIcons";

const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "80%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };

  return (
    <section className="landing" style={styles.landing}>
      
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <div className="description">
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter
                .changeDelay(80)
                .typeString("I'm a Software Engineer")
                .pauseFor(1500)
                .deleteAll()
                .typeString("I'm a Full Stack Developer")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Code. ")
                .pauseFor(500)
                .typeString("Create. ")
                .pauseFor(500)
                .typeString("Solve Problems.")

                .start();
            }}
          />
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Landing;
