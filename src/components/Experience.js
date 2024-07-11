import React from 'react';
import { Container, Accordion } from 'react-bootstrap';
import './custom.css';

function Experience() {
    return (
        <Container className="my-5 Experience" id="Experience">
            <h2>Experience</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>I am onto my fourth semester at Wake Tech</Accordion.Header>
                    <Accordion.Body>
                    With my fourth semester starting in the fall of 2025, once I complete my spring semester that year, I will have fulfilled all requirements for my degree in Web Development basics. This milestone marks a significant achievement in my academic journey, equipping me with essential skills and knowledge to pursue my career goals in web development.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Work with a family friend on web building and script work</Accordion.Header>
                    <Accordion.Body>
                    I began working for Erick in January 2024 to broaden my experience in web development, server scripting, and UX design. My role also involves managing timelines and workload allocation for other team members within the company. This opportunity has been invaluable in enhancing my skills and understanding of these key areas in the field.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Completed over 20 websites for school and over 40 certifications</Accordion.Header>
                    <Accordion.Body>
                    During my time at Wake Tech, I completed a diverse range of classes and lessons that significantly enriched my skill set. These experiences have prepared me well for entering the workforce, covering areas from foundational web development and server scripting to advanced UX design and project management. I am grateful for the comprehensive learning environment and supportive community that helped me develop both technical expertise and essential problem-solving skills.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

export default Experience;