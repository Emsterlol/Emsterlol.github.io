import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profileImage from './images/Emmy.jpg';

function About() {
    return (
        <Container className="my-5" id="Main">
            <Row className="section-offset">
                <Col md={4}>
                    <Image src={profileImage} rounded fluid />
                </Col>
                <Col md={8}>
                    <div className="about-box">
                        <h2>About Me</h2>
                        <p>
                            I am a dedicated web developer currently in my 4th semester, with proficiency in HTML, CSS, JavaScript, and C#. I have a strong foundation in mobile design and UX design, backed by completed courses and practical experience in creating websites for various projects. I am actively expanding my knowledge by participating in real-world projects, including collaborating with a friend's dad's business to gain hands-on experience. My work ethic is characterized by hard work and a genuine passion for continuous learning in the dynamic field of web development.
                        </p>
                    </div>
                    <div className="about-box">
                        <h2>My Hobbies Include</h2>
                        <ul>
                            <li>Hiking</li>
                            <li>Art/Drawing</li>
                            <li>Reading</li>
                            <li>Collecting Board Games</li>
                            <li>Video Games</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default About;