import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwiterIcon from "../../assets/twitter.png";
import Instagram from "../../assets/instagram.png";

const Contact = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jxr84c8",
        "template_o748v2k",
        form.current,
        "xqdrayZiAZ86mhOqR"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Show the success popup after a successful submission
          setShowPopup(true);

          // Reset the form (if needed)
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>

        <span className="contactdescription"></span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="your name"
            name="user_name"
          />

          <input
            type="text"
            className="email"
            placeholder="your Email"
            name="user_email"
          />

          <textarea
            name="message"
            id=""
            rows="5"
            placeholder="message"
            className="msg"
          ></textarea>

          <button className="submitBtn" type="submit" value="send">
            {" "}
            Submit
          </button>
        </form>

        <div className="links">
          <img src={FacebookIcon} alt="FacebookIcon" className="links" />
          <img src={TwiterIcon} alt="TwiterIcon" className="links" />
          <img src={Instagram} alt="Instagram" className="links" />
        </div>

        {showPopup && (
          <div className="successPopup">
            <p>Message sent successfully!</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
