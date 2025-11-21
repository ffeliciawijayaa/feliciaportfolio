import { Link } from "react-router-dom";
import "./ActivityCardStyles.css";
import cp from "../assets/cp.png";
import dieco from "../assets/dieco.png";
import air from "../assets/air.png";
import icsf from "../assets/icsf.png";
import uksw from "../assets/uksw.png";

const ActivityCard = () => {
  return (
    <div className="Activity">
      <div className="card-container">
        <div className="card">
          <img src={cp} alt="Competitive Programming" />
          <h3>2nd Place Competitive Programming PINGFEST 2025</h3>
          <span className="bar">October 2025</span>
          <span className="bars">Universitas Sebelas Maret Surakarta</span>

          <p>
            Part of a three member team in PINGFEST 2025’s Competitive
            Programming branch, solving algorithmic challenges in Python under
            time pressure through close collaboration.
          </p>
        </div>

        <div className="card">
          <img src={dieco} alt="Video Making Competition DIECO 2025" />
          <h3>1st Place Video Making Competition DIECO 2025</h3>
          <span className="bar">May 2025</span>
          <span className="bars">Universitas Kristen Satya Wacana</span>

          <p>
            My team TUKUL, inspired by “Tukang Cangkul”, joined a community
            service and tree planting video competition in Selo, Boyolali. The
            project focused on environmental awareness and community
            involvement, and we won 1st place.
          </p>
        </div>

        <div className="card">
          <img src={air} alt="Best Category Award in AI Modeling" />
          <h3>Best Category Award AI Modeling TechnoFest 2025</h3>
          <span className="bar">May 2025</span>
          <span className="bars">Universitas Bunda Mulia</span>

          <p>
            Worked with a three member team to build AirMind, an AI-powered web
            app for real time air quality monitoring and prediction. The project
            won Best Category Award in AI Modeling for its innovative approach.
          </p>
        </div>

        <div className="card">
          <img src={icsf} alt="Scholarship" />
          <h3>Awardee of International Christian Scholarship Foundation</h3>
          <span className="bar">2024</span>
          <span className="bars">ICSF</span>

          <p>
            Awardee of the ICSF Scholarship, for Christian and Catholic students
            who have outstanding academic performance and exemplify character
            aligned with service and leadership.
          </p>
        </div>
        <div className="card">
          <img src={uksw} alt="Scholarship" />
          <h3>Awardee of Satya Wacana Achievement Academic Scholarship</h3>
          <span className="bar">2024 -Present</span>
          <span className="bars">Universitas Kristen Satya Wacana</span>

          <p>
            Awardee of the Academic Achievement Scholarship from Universitas
            Kristen Satya Wacana for maintaining a GPA of at least 3.9 and
            demonstrating consistent academic excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
