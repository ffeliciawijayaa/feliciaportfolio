import "./WorkCardStyles.css";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="Project" />
      <h2 className="project-title">{props.title}</h2>

      <div className="project-details">
        <div className="type">
          <p>
            <b>{props.type}</b>
          </p>
        </div>
        <p>{props.text}</p>
        <p>
          <b>Role : </b>
          {props.role}
        </p>
        <p>
          <b>Tech & Tools : </b>
          {props.tech}
        </p>
        <p>
          <b>What I Learned : </b>
          {props.learn}
        </p>
      </div>

      <div className="project-btn">
        <a
          href={props.view}
          className="btn btn-left"
          target="_blank"
          rel="noopener noreferrer"
        >
          More
        </a>
        <a
          href={props.source}
          className="btn btn-right"
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
