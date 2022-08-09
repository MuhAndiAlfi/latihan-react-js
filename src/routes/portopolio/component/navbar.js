import Link from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/Container"

function navbar() {
    return (
        <Navbar
            bg="dark"
            variant="dark"
            style={{
                paddingTop: "15px"
            }}>
            <Container >
                <Nav>
                    <Navbar.Brand href="#home">
                        <img alt="" src="./logo.svg" width="122px" className="img"/>
                    </Navbar.Brand>
                    <Nav.Item>
                        <Nav.Link href='/home'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/#'>Portofolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/about'>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='/blog'>Blog</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default navbar