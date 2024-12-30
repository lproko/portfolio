import { Col } from "react-bootstrap";
import "./Works.scss";

interface Properties {
  title: string;
  description: string;
  imgUrl: string;
  url: string;
}
export const ProjectCard = (props: Properties) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={props.imgUrl} height="300px" />
        <div className="proj-txtx">
          <h5>{props.title}</h5>
          <span>{props.description}</span>
          <br />
          <a href={props.url} target="_blank">
            Exantas
          </a>
        </div>
      </div>
    </Col>
  );
};
