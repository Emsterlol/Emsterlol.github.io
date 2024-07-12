import React from 'react';
import { Container, Nav } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark">
            <Container id="Footer">
                <Nav className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link href="https://github.com/Emsterlol" className="text-white" target="_blank" rel="noopener noreferrer">GitHub</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://www.linkedin.com/in/emily-horne-97b74b266/" className="text-white" target="_blank" rel="noopener noreferrer">LinkedIn</Nav.Link>
                    </Nav.Item>
                </Nav>
                <p className="text-center text-white mt-3">&copy; 2024 Emily Horne. All rights reserved.</p>
            </Container>
        </footer>
    );
}

export default Footer;