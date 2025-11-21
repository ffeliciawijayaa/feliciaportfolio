import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgPr from "../components/HeroImgPr";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImgPr
        heading="CONTACT"
        text="Feel free to reach out! I’m open to any professional opportunities or collaborations."
      />
      <Footer />
    </div>
  );
};

export default About;
