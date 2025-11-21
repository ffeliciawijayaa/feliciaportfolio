import "./WorkCardStyles.css";
import WorkCard from "./WorkCard.jsx";
import WorkCardData from "./WorkCardData.jsx";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={val.imgsrc}
              type={val.type}
              title={val.title}
              text={val.text}
              role={val.role}
              tech={val.tech}
              learn={val.learn}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
