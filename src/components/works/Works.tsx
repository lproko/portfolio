import "./Works.scss";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/project-img1.png";
import projImg2 from "../../assets/project-img2.png";
import projImg3 from "../../assets/project-img3.png";
import colorSharp2 from "../../assets/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Works() {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => {
                return (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    {/* {console.log(isVisible)} */}
                    <h2>Projects</h2>
                    <p>
                      Discover a showcase of our latest projects where
                      creativity meets functionality. From stunning website
                      designs to innovative web applications, each project
                      exemplifies our commitment to excellence and client
                      satisfaction. Dive in to see how we can bring your vision
                      to life.
                    </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        {/* <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item> */}
                        {/* <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item> */}
                      </Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
                        </Tab.Pane>
                        {/* <Tab.Pane eventKey="second">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque quam, quod neque provident velit, rem
                            explicabo excepturi id illo molestiae blanditiis,
                            eligendi dicta officiis asperiores delectus quasi
                            inventore debitis quo.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque quam, quod neque provident velit, rem
                            explicabo excepturi id illo molestiae blanditiis,
                            eligendi dicta officiis asperiores delectus quasi
                            inventore debitis quo.
                          </p>
                        </Tab.Pane> */}
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}

export default Works;
