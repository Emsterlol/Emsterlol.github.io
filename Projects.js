import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import projectImage1 from './images/new-media-portfolio.PNG';
import projectImage2 from './images/forest-website.PNG';
import projectImage3 from './images/Resize-PolskyCorp.png';
import projectImage4 from './images/Persona.JPG';
import projectImage5 from './images/EmpathyMap.JPG';
import projectImage6 from './images/Figma.JPG';
import './custom.css';

function Projects() {
    return (
        <Container className="my-5" id="Projects">
            <h2>Projects</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card className="h-100 custom-card">
                        <Card.Img variant="top" src={projectImage1} />
                        <Card.Body>
                            <Card.Title>Final Project - Third Semester 2024</Card.Title>
                            <Card.Text>
                                This portfolio project stands out as one of my favorites, largely due to my exploration of Bootstrap. I had a fun time discovering its versatility and learning how to craft finely-tuned websites that cater to diverse user needs. Bootstrap's capabilities allowed me to implement a wide range of features and design elements effectively, enhancing both the functionality and aesthetic appeal of the project.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 custom-card">
                        <Card.Img variant="top" src={projectImage2} />
                        <Card.Body>
                            <Card.Title>Resume Lesson - Third Semester 2024</Card.Title>
                            <Card.Text>
                                Working on this project involved following specific instructions while having the freedom to choose color schemes. I particularly enjoyed this creative aspect because I have a strong passion for design. Experimenting with CSS styles was a valuable learning experience that allowed me to enhance my skills in creating visually appealing and cohesive designs while meeting project requirements.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 custom-card">
                        <Card.Img variant="top" src={projectImage3} />
                        <Card.Body>
                            <Card.Title>Polsky Corp</Card.Title>
                            <Card.Text>
                                My first project was creating a website for Polsky Corp, a company owned by a family friend named Erick. It was a meaningful experience as it marked the beginning of my career as a web designer. Erick trusted me with this project, and I worked closely with him to bring his vision to life. This project kickstarted my passion for web design and gave me valuable hands-on experience.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 custom-card">
                        <Card.Img variant="top" src={projectImage4} />
                        <Card.Body>
                            <Card.Title>Persona</Card.Title>
                            <Card.Text>
                                In my second semester of the UX/UI class, I crafted two Personas for my GeoPhoto app project. This involved envisioning users as authentic individuals facing genuine challenges. This exercise prompted me to contemplate ways to enhance the app's utility, such as incorporating features to identify more accessible trails for individuals with limited mobility.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 custom-card">
                        <Card.Img variant="top" src={projectImage5} />
                        <Card.Body>
                            <Card.Title>Empathy Map</Card.Title>
                            <Card.Text>
                                In the UX/UI class's second semester, I developed Empathy Maps for both Sarrah and Alex, detailing their experiences with the GeoPhoto app. These maps outlined their actions, tasks, feelings, and potential improvements, focusing on enhancing user engagement and community-building features.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 custom-card">
                        <Card.Img variant="top" src={projectImage6} />
                        <Card.Body>
                            <Card.Title>Figma</Card.Title>
                            <Card.Text>
                                During my second semester in the UX/UI class, I undertook a Figma markup assignment. The objective was to design an original app that catered to a wide audience and was not likely available on the app store. My creation, GeoPhoto, allowed users to capture intriguing moments in their city or local hiking trails and attach their location. This enabled others to explore the same spots and experiences captured by different individuals.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;