import { Col } from "react-bootstrap";
interface Properties {
  title: string;
  description: string;
  imgUrl: string;
}
export const ProjectCard = (props: Properties) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={props.imgUrl} />
        <div className="proj-txtx">
          <h4>{props.title}</h4>
          <span>{props.description}</span>
        </div>
      </div>
    </Col>
  );
};
