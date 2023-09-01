import About1 from "./screenshot/about.png.png";

import AboutME from "./screenshot/aboutme.png.png";
import Cart from "./screenshot/cart.png.png";
import contact from "./screenshot/contact.png.png";
import home from "./screenshot/home.png.png";
//
import GameHome from "./screenshot/homegame.png";
import GameHistory from "./screenshot/gamehistory.png";
//

import YoutubeHome from "./screenshot/youtubehome.png";

import youtubeVideo from "./screenshot/video.png";
import Login from "./screenshot/login.png.png";
import RestraunatMenu from "./screenshot/restraumenu.png.png";
import FoodVideos from "./Captures/Food.mp4";
import YoutubeVideo from "./Captures/Youtube.mp4";
import Gamevideo from "./Captures/game.mp4";

  const ProjectsData = [
    {
      id: 1,
      name: "Food-order-application",
      description:
        "Create a Swiggy clone, a popular online food ordering and delivery platform, to practice building a full-stack web application. This project will be implemented using React for the frontend, Redux for state management, and Tailwind CSS for styling.",
      demoLink: "https://rasoyfood.netlify.app/",
      images: [home,About1, Cart, AboutME, contact, Login, RestraunatMenu],
      video: FoodVideos,
    },
    {
      id: 2,
      name: "Youtube-clone",
      description:
        "Build a YouTube clone, a popular video-sharing platform, to gain practical experience in building a full-stack web application. This project will be implemented using React for the frontend, Redux for state management, and Tailwind CSS for styling.",
      images: [YoutubeHome, youtubeVideo],
      video: YoutubeVideo,
    },
    {
      id: 3,
      name: "Tic-Tac-Toe Game",
      description:
        "This is a simple Tic-Tac-Toe game. See the match history and winner message.",
      demoLink: "https://titactogame.netlify.app/",
      images: [GameHome, GameHistory],
      video: Gamevideo,
    },
  ];
export default ProjectsData