import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const Experience = ({
  technologies,
  title,
  company,
  image,
  color,
  proof,
  id,
  description,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    hidden: { x: id % 2 === 0 ? "10vw" : "-10vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const navigate = useNavigate();
  const handleOpenModal = () => {
    navigate(`/portfolio/${id}`);
  };

  return (
    <motion.div
      ref={ref}
      className="col-sm-12 col-lg-6 p-2"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        style={{ backgroundColor: color }}
        className="projectCard"
        onClick={handleOpenModal}
      >
        <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-4">
          <p className="tech">
            <em>{technologies}</em>
          </p>
          <p className="tech">
            <em>{company}</em>
          </p>
          <h3 className="projectTitle">{title}</h3>
          <span className="viewWork">View Work &#8594;</span>
        </div>

        <div className="imageContainer">
          <img src={image} alt="Laptop displaying the application" />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
