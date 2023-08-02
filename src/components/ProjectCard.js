import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project-img" />
        <div className="proj-txtx" style={{ color: "white" }}>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
