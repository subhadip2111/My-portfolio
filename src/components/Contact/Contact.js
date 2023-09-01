import React from 'react'
import "./contact.css"
// import Walmart from "../../assets/walmart.png"
// import Adobe from "../../assets/adobe.png"
// import Microsoft from "../../assets/microsoft.png"
// import Facebook from "../../assets/facebook.png"
import FacebookIcon from "../../assets/facebook-icon.png"
import TwiterIcon from '../../assets/twitter.png'
import Instagram from '../../assets/instagram.png'

const Contact = () => {
  return (
    <section id="contactPage">
   
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>

        <span className="contactdescription"></span>
        <from className="contactForm">
          <input type="text" className="name" placeholder="your name" />

          <input type="text" className="email" placeholder="your Email" />

          <textarea
            name=""
            id=""
            rows="5"
            placeholder="message"
            className="msg"
          ></textarea>

          <button className="submitBtn" type="submit" value="send">
            {" "}
            Submit
          </button>

          <div className="links">
            <img src={FacebookIcon} alt="FacebookIcon" className="links" />
            <img src={TwiterIcon} alt="TwiterIcon" className="links" />
            <img src={Instagram} alt="Instagram" className="links" />
          </div>
        </from>
      </div>
    </section>
  );
}

export default Contact

