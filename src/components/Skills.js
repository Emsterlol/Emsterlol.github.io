import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import './custom.css';

function Skills() {
    return (
        <Container className="my-5 Skills" id="Skills">
            <h2>Skills</h2>
            <ListGroup>
                <ListGroup.Item>HTML & CSS</ListGroup.Item>
                <ListGroup.Item>UX/UI Design</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>React</ListGroup.Item>
                <ListGroup.Item>Figma</ListGroup.Item>
                <ListGroup.Item>WordPress</ListGroup.Item>
                <ListGroup.Item>Node.js</ListGroup.Item>
            </ListGroup>
        </Container>
    );
}

export default Skills;