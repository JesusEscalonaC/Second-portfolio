import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import ColorSharp2 from '../assets/img/color-sharp2.png';



export const Projects = () =>{
        const projects = [
            {
                title: "pokedex",
                description: "Pokedex made with react",
                imgUrl: projImg1,
                Url: "https://pokedex-jesusescalona-oscartandioy.netlify.app/"
            },
            {
                title: "Ecommerce",
                description: "Ecommerce made with react",
                imgUrl: projImg2,
                Url: "https://e-comerce-oscar-jesus-react.netlify.app/"
            },
            {
                title: "Rick and Morty API",
                description: "the front of an API made with react",
                imgUrl: projImg3,
                Url: "https://rickandmorty-jesus-oscar.netlify.app/"
            },
            {
                title: "Random Quote Generator",
                description: "A random quote generator",
                imgUrl: projImg4,
                Url: "https://randomquotes-jesusescalona.netlify.app/"
            },
            {
                title: "Box shadow generator",
                description: "A boz shadow generator made using javascript, html and css",
                imgUrl: projImg6,
                Url: "https://boxshadow-jesusescalona.netlify.app/"
            },
            {
                title: "Weather App",
                description: "A weather app using an OpenWeatherApp API",
                imgUrl: projImg5,
                Url: "https://your-weather-app-jesusescalona.netlify.app/"
            },
        ]


    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Some projects I`ve made, soon I will show new ones!</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third" >
                            third
                          </Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                   {
                                    projects.map((project, index)=>{
                                        return (
                                           <ProjectCard
                                                key={index}
                                                {...project}
                                           />
                                        )
                                    })
                                   }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second"></Tab.Pane>
                            <Tab.Pane eventKey="third"></Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={ColorSharp2}></img>
        </section>
    )
}