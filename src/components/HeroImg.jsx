import "./HeroImgStyles.css";
import IntroImg from "../assets/bg.jpeg";
import ProfilePic from "../assets/feli.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="Background" />
      </div>

      <div className="content">
        <div className="text-section">
          <p>Hi there!👋</p>
          <h1>I'm Felicia Wijaya</h1>
          <p className="description">
            A 3rd year Computer Science student with a strong willingness to
            learn and a genuine passion for UI/UX, Software Engineering, and
            Quality Assurance. I love exploring new ideas and turning them into
            meaningful, impactful solutions. If you'd like to get to know me
            better, feel free to click the button below!
          </p>
          <div className="button-group">
            <Link to="/project" className="btn">
              Projects
            </Link>
            <Link to="/about" className="btn-light">
              Contact
            </Link>
          </div>
        </div>

        <div className="image-section">
          <div className="polaroid-frame-container">
            <div className="polaroid-frame">
              <img
                src={ProfilePic}
                alt="Felicia Wijaya"
                className="profile-photo"
              />
              <div className="caption">
                <p className="name">You can call me Feli</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
