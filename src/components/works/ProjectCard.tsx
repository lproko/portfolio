import { Col } from "react-bootstrap";
import "./Works.scss";

interface Properties {
  title: string;
  description: string;
  imgUrl: string;
}
export const ProjectCard = (props: Properties) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={props.imgUrl} width="100%" />
        <div className="proj-txtx">
          <h5>{props.title}</h5>
          <span>{props.description}</span>
        </div>
      </div>
    </Col>
  );
};
