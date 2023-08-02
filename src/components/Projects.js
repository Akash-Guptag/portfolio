import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img21.png";
import projImg3 from "../assets/img/project-img31.png";
import projImg4 from "../assets/img/poroject-img4.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Visit Website",
      description: "2048 Game",
      imgUrl: projImg1,
      link: "https://my-2048-game.netlify.app/"
    },
    {
      title: "Visit Website",
      description: "AI Generated Image",
      imgUrl: projImg2,
      link: "https://dalle-client-i3u5eek8o-akash-guptag.vercel.app/"
    },
    {
      title: "Visit Website",
      description: "Anime Streaming Website",
      imgUrl: projImg3,
      link: "https://animesaga1.netlify.app/"
    },
  ];

  const projects2 = [
    {
      title: "Visit Website",
      description: "AI based article Summarizer",
      imgUrl: projImg4,
      link: "https://summarizer1.netlify.app/"
    },
    {
      title: "Visit Website",
      description: "Anime Streaming Website",
      imgUrl: projImg1,
      link: "https://animesaga1.netlify.app/"
    },
    {
      title: "Visit Website",
      description: "AI Generated Image",
      imgUrl: projImg2,
      link: "https://dalle-client-i3u5eek8o-akash-guptag.vercel.app/"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>In my projects, I developed a 2048 game using HTML, CSS, and JavaScript, followed by an AI Image Generator using OpenAI API and React. Additionally, I crafted several websites using HTML, CSS, and JavaScript, deploying them with AWS, GitHub, and Docker for seamless accessibility.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => (
                            <Col key={index} xs={12} sm={6} md={4}>
                              <a href={project.link} target="_blank" rel="noopener noreferrer" >
                                <ProjectCard {...project} />
                              </a>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {projects2.map((project, index) => (
                            <Col key={index} xs={12} sm={6} md={4}>
                              <a href={project.link} target="_blank" rel="noopener noreferrer" >
                                <ProjectCard {...project} />
                              </a>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Loading...</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  )
}
