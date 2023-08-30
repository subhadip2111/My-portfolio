import React, { useEffect, useMemo, useState } from "react";
import "./intro.css";
import { Link } from "react-scroll";
import btn from "../../assets/hireme.png";

const Intro = () => {
  const [typingText, setTypingText] = useState("");
   const textArray = useMemo(
     () => [
       "Web Developer",
       "Passionate about React.js",
       "Crafting engaging web experiences",
       "With a touch of innovation and code",
     ],
     []
   );
  const typingSpeed = 100; // Adjust the typing speed in milliseconds

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentWord = textArray[currentIndex];
      if (!isDeleting) {
        currentText = currentWord.substring(0, currentText.length + 1);
        setTypingText(currentText);
      } else {
        currentText = currentWord.substring(0, currentText.length - 1);
        setTypingText(currentText);
      }

      if (!isDeleting && currentText === currentWord) {
        isDeleting = true;
        setTimeout(() => {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % textArray.length;
        }, 1500);
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % textArray.length;
      }

      if (currentIndex === textArray.length - 1 && isDeleting) {
        setTypingText(""); // Clear the text after the last word is deleted
      }

      if (
        currentIndex === textArray.length - 1 &&
        currentText === textArray[textArray.length - 1]
      ) {
        return; // Stop the typing animation after the last word is fully typed
      }

      setTimeout(type, typingSpeed);
    };

    type();
  },[textArray]);

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello there,</span>
        <span className="introText">
          I'm <span className="introName">Subhadip shee</span>
          <br></br> {typingText}
        </span>
        <p className="introPara">
          As a web developer, I'm enthusiastic about crafting interactive web
          experiences that captivate and engage users. With a mix of creativity
          and coding skills, I bring ideas to life.
        </p>
        <Link>
          <button className="btn">
            <img src={btn} alt="Hire me" /> Let's Collaborate
          </button>
        </Link>
      </div>

      <img
        src="https://images.unsplash.com/photo-1518530179311-641ebb3b6b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Profile"
      />
    </section>
  );
};

export default Intro;
