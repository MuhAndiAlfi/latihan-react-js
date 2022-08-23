import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/esm/Container';
import React from 'react';
import axios from 'axios'

// -----------CLASS COMPONENT
class Website extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const url = 'https://latihan-backend-express.herokuapp.com/api/portopolio'

        axios
            .get(url)
            .then(portopolio => {
                this.setState({data: portopolio.data})
            })

    }

    render() {

        const portopolio = this.state

        return (

            <Container fluid="fluid">
                <Row>

                    {
                        portopolio
                            .data
                            .map((val => {
                                if (val.type === 'Website'){
                                    return (
                                        <Col md={3} className="mt-3">
                                            <Card >
                                                <Card.Body>
                                                    <div
                                                        style={{
                                                            backgroundImage: "url('./img/"+ val.image +"')"
                                                        }}
                                                        className='image-background'>
                                                        <Button variant="primary">Lihat</Button>

                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="text-muted">
                                                    <Card.Title>{val.title}</Card.Title>
                                                    <Card.Text style={{height: '40px'}}>{val.description}</Card.Text>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                    )
                                }

                                return null
                            }))
                    }
                </Row>
            </Container>

        )
    }

}

// -------------------FUNCTIONAL COMPONENT

// function Website() {
//     return (
//         <Container fluid="fluid">

//             <Row>
//                 <Col md={3} className="mt-3">
//                     <Card >
//                         <Card.Body>
//                             <div
//                                 style={{
//                                     backgroundImage: "url('./img/mizan-web.png')",
//                                 }}
//                                 className='image-background'
//                                 >
//                                 <Button variant="primary">Lihat</Button>

//                             </div>
//                         </Card.Body>
//                         <Card.Footer className="text-muted">
//                             <Card.Title>Mizan Amanah</Card.Title>
//                             <Card.Text>Website Crowdfunding untuk Yayasan Mizan Amanah.</Card.Text>
//                         </Card.Footer>
//                     </Card>
//                 </Col>
//                 <Col md={3} className="mt-3">
//                     <Card >
//                         <Card.Body>
//                             <div
//                                 style={{
//                                     backgroundImage: "url('./img/mizan-web.png')",
//                                     backgroundSize: "contain",
//                                     height: 139.8,
//                                     width: 266
//                                 }}>
//                                 <Button variant="primary">Lihat</Button>

//                             </div>
//                         </Card.Body>
//                         <Card.Footer className="text-muted">
//                             <Card.Title>Mizan Amanah</Card.Title>
//                             <Card.Text>Website Crowdfunding untuk Yayasan Mizan Amanah.</Card.Text>
//                         </Card.Footer>
//                     </Card>
//                 </Col>
//                 <Col md={3} className="mt-3">
//                     <Card >
//                         <Card.Body>
//                             <div
//                                 style={{
//                                     backgroundImage: "url('./img/mizan-web.png')",
//                                     backgroundSize: "contain",
//                                     height: 139.8,
//                                     width: 266
//                                 }}>
//                                 <Button variant="primary">Lihat</Button>

//                             </div>
//                         </Card.Body>
//                         <Card.Footer className="text-muted">
//                             <Card.Title>Mizan Amanah</Card.Title>
//                             <Card.Text>Website Crowdfunding untuk Yayasan Mizan Amanah.</Card.Text>
//                         </Card.Footer>
//                     </Card>
//                 </Col>
//                 <Col md={3} className="mt-3">
//                     <Card >
//                         <Card.Body>
//                             <div
//                                 style={{
//                                     backgroundImage: "url('./img/mizan-web.png')",
//                                     backgroundSize: "contain",
//                                     height: 139.8,
//                                     width: 266
//                                 }}>
//                                 <Button variant="primary">Lihat</Button>

//                             </div>
//                         </Card.Body>
//                         <Card.Footer className="text-muted">
//                             <Card.Title>Mizan Amanah</Card.Title>
//                             <Card.Text>Website Crowdfunding untuk Yayasan Mizan Amanah.</Card.Text>
//                         </Card.Footer>
//                     </Card>
//                 </Col>
//             </Row>
//             <Row className='mt-3 mt-3'>
//                 <Col md={3} className="mt-3">
//                     <Card >
//                         <Card.Body>
//                             <div
//                                 style={{
//                                     backgroundImage: "url('./img/mizan-web.png')",
//                                     backgroundSize: "contain",
//                                     height: 139.8,
//                                     width: 266
//                                 }}>
//                                 <Button variant="primary">Lihat</Button>

//                             </div>
//                         </Card.Body>
//                         <Card.Footer className="text-muted">
//                             <Card.Title>Mizan Amanah</Card.Title>
//                             <Card.Text>Website Crowdfunding untuk Yayasan Mizan Amanah.</Card.Text>
//                         </Card.Footer>
//                     </Card>
//                 </Col>
//                 <Col md={3} className="mt-3">
//                     <Card >
//                         <Card.Body>
//                             <div
//                                 style={{
//                                     backgroundImage: "url('./img/mizan-web.png')",
//                                     backgroundSize: "contain",
//                                     height: 139.8,
//                                     width: 266
//                                 }}>
//                                 <Button variant="primary">Lihat</Button>

//                             </div>
//                         </Card.Body>
//                         <Card.Footer className="text-muted">
//                             <Card.Title>Mizan Amanah</Card.Title>
//                             <Card.Text>Website Crowdfunding untuk Yayasan Mizan Amanah.</Card.Text>
//                         </Card.Footer>
//                     </Card>
//                 </Col>
//                 <Col md={3} className="mt-3">
//                     <Card >
//                         <Card.Body>
//                             <div
//                                 style={{
//                                     backgroundImage: "url('./img/mizan-web.png')",
//                                     backgroundSize: "contain",
//                                     height: 139.8,
//                                     width: 266
//                                 }}>
//                                 <Button variant="primary">Lihat</Button>

//                             </div>
//                         </Card.Body>
//                         <Card.Footer className="text-muted">
//                             <Card.Title>Mizan Amanah</Card.Title>
//                             <Card.Text>Website Crowdfunding untuk Yayasan Mizan Amanah.</Card.Text>
//                         </Card.Footer>
//                     </Card>
//                 </Col>
//                 <Col md={3} className="mt-3">
//                     <Card >
//                         <Card.Body>
//                             <div
//                                 style={{
//                                     backgroundImage: "url('./img/mizan-web.png')",
//                                     backgroundSize: "contain",
//                                     height: 139.8,
//                                     width: 266
//                                 }}>
//                                 <Button variant="primary">Lihat</Button>

//                             </div>
//                         </Card.Body>
//                         <Card.Footer className="text-muted">
//                             <Card.Title>Mizan Amanah</Card.Title>
//                             <Card.Text>Website Crowdfunding untuk Yayasan Mizan Amanah.</Card.Text>
//                         </Card.Footer>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     )
// }

export default Website