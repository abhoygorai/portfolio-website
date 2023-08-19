import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    access_key: process.env.REACT_APP_ACCESS_KEY,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_opayapc",
      "template_x2iwona",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        subject: formData.subject,
      },
      "xmcpoys2LJhQLbK8s"
    );
    e.target.reset();
    setSuccess(true);
  };

  return (
    <form ref={form} className="contactForm" onSubmit={sendEmail}>
      <h4 className="contentTitle">Message Me</h4>
      <div
        className="col-12 col-md-6 formGroup"
        style={{ display: "inline-block" }}
      >
        <input
          type="text"
          className="formControl"
          onChange={handleChange}
          value={formData.name}
          id="contactName"
          name="name"
          placeholder="Name"
          required
        />
      </div>
      <div
        className="col-12 col-md-6 formGroup"
        style={{ display: "inline-block" }}
      >
        <input
          type="email"
          className="formControl"
          onChange={handleChange}
          value={formData.email}
          id="contactEmail"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="col-12 formGroup">
        <input
          type="text"
          className="formControl"
          onChange={handleChange}
          value={formData.subject}
          id="contactSubject"
          name="subject"
          placeholder="Subject"
          required
        />
      </div>
      <div className="col-12 formGroup">
        <textarea
          className="formControl"
          onChange={handleChange}
          value={formData.message}
          name="message"
          id="contactMessage"
          rows="5"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <div className="col-12 formGroup formSubmit">
        <button
          className="btn"
          // onClick={sendEmail}
          type="submit"
          disabled={success}
        >
          {success ? "Message Sent" : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default Form;
