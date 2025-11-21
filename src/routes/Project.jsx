import Navbar from "../components/Navbar";
import HeroImgPr from "../components/HeroImgPr";
import Footer from "../components/Footer";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImgPr
        heading="PROJECTS."
        text="These are my most recent projects."
      />

      <Work />

      <Footer />
    </div>
  );
};

export default Project;
