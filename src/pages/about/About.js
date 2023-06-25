import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";

const About = ({ name, location, email, availability }) => {
  return (
    <section className="about">
      {/* <PageHeader title="About me" description="Coming Soon..." /> */}
      <AboutMe name={name} location={location} email={email} availability={availability} />
    </section>
  );
};

export default About;
