import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";
import closeModal from "../images/close.svg";


const Project = ({
  technologies,
  title,
  image,
  color,
  id,
  github,
  deployed,
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
        <div className="textWrap col-4 d-flex flex-column justify-content-center align-items-center m-4">
          <p className="tech">
            <em>{technologies}</em>
          </p>
          <h3 className="projectTitle">{title}</h3>
          <span className="viewWork">View Work &#8594;</span>
        </div>
        <div className="imageContainer">
          <img src={image} alt="Laptop displaying the application" />
        </div>
      </div>
      {/* <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            backgroundColor: "#101010",
            color: "#9f9f9f",
            padding: "60px",
            display: "flex",
            flexDirection: "column",
            width: "400px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            zIndex: "999",
          },
        }}
      >
        <img
          src={closeModal}
          className="closeMenu closeModal"
          onClick={handleCloseModal}
          alt="Close"
        ></img>
        <h3 className="modalTitle">{title}</h3>
        <p className="projectDescription text-justify">{description}</p>
        {github == "" ? (
          ""
        ) : (
          <button
            className="btn"
            onClick={() => (window.location.href = github)}
          >
            GitHub Repo
          </button>
        )}
        {deployed == "" ? (
          ""
        ) : (
          <button
            className="btn"
            onClick={() => (window.location.href = deployed)}
          >
            Live Link
          </button>
        )}
      </Modal> */}
    </motion.div>
  );
};

export default Project;
