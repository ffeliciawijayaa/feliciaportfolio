import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImgPr from "../components/HeroImgPr";
import ActivityCard from "../components/ActivityCard";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImgPr
        heading="AWARDS"
        text="Awards I’ve achieved during my university life."
      />

      <ActivityCard />
      <Footer />
    </div>
  );
};

export default Contact;
