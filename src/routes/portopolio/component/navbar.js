import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/Container"

function navbar() {
    return (

        <Navbar
            style={{
                backgroundColor: "#2b2131"
            }}
            expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img alt="" src="./logo.svg" width="122px" className="img"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <i className='icon-bar'/>
                    <i className='icon-bar'/>
                    <i className='icon-bar'/>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                    <Nav style={{textAlign: 'center'}}>
                        <Nav.Link href='/home' className="link-light">Home</Nav.Link>
                        <Nav.Link href='/#' className="link-light">Portofolio</Nav.Link>
                        <Nav.Link href='/about' className="link-light">About</Nav.Link>
                        <Nav.Link href='/blog' className="link-light">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default navbar