import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/esm/Container';
import React from 'react';
import axios from 'axios'
class Mobile extends React.Component{
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
                                if (val.type === 'Mobile'){
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

// function Mobile() {
//     return (
//         <Container fluid="fluid">
//             <Row>
//                 <Col md={3} className="mt-3">
//                     <Card >
//                         <Card.Body>

//                             <div
//                                 style={{
//                                     backgroundImage: "url('./img/temanpeduli.png')"
//                                 }}
//                                 className='image-background'>
//                                 <Button variant="primary">Lihat</Button>

//                             </div>
//                         </Card.Body>
//                         <Card.Footer className="text-muted">
//                             <Card.Title>Teman Peduli</Card.Title>
//                             <Card.Text>Apps Crowdfunding untuk Komunitas Teman Peduli.</Card.Text>
//                         </Card.Footer>
//                     </Card>
//                 </Col>
//                 <Col md={3} className="mt-3">
//                     <Card >
//                         <Card.Body>

//                             <div
//                                 style={{
//                                     backgroundImage: "url('./img/temanpeduli.png')"
//                                 }}
//                                 className='image-background'>
//                                 <Button variant="primary">Lihat</Button>

//                             </div>
//                         </Card.Body>
//                         <Card.Footer className="text-muted">
//                             <Card.Title>Teman Peduli</Card.Title>
//                             <Card.Text>Apps Crowdfunding untuk Komunitas Teman Peduli.</Card.Text>
//                         </Card.Footer>
//                     </Card>
//                 </Col>
//                 <Col md={3} className="mt-3">
//                     <Card >
//                         <Card.Body>

//                             <div
//                                 style={{
//                                     backgroundImage: "url('./img/temanpeduli.png')"
//                                 }}
//                                 className='image-background'>
//                                 <Button variant="primary">Lihat</Button>

//                             </div>
//                         </Card.Body>
//                         <Card.Footer className="text-muted">
//                             <Card.Title>Teman Peduli</Card.Title>
//                             <Card.Text>Apps Crowdfunding untuk Komunitas Teman Peduli.</Card.Text>
//                         </Card.Footer>
//                     </Card>
//                 </Col>
//                 <Col md={3} className="mt-3">
//                     <Card >
//                         <Card.Body>

//                             <div
//                                 style={{
//                                     backgroundImage: "url('./img/temanpeduli.png')"
//                                 }}
//                                 className='image-background'>
//                                 <Button variant="primary">Lihat</Button>

//                             </div>
//                         </Card.Body>
//                         <Card.Footer className="text-muted">
//                             <Card.Title>Teman Peduli</Card.Title>
//                             <Card.Text>Apps Crowdfunding untuk Komunitas Teman Peduli.</Card.Text>
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
//                                     backgroundImage: "url('./img/temanpeduli.png')"
//                                 }}
//                                 className='image-background'>
//                                 <Button variant="primary">Lihat</Button>

//                             </div>
//                         </Card.Body>
//                         <Card.Footer className="text-muted">
//                             <Card.Title>Teman Peduli</Card.Title>
//                             <Card.Text>Apps Crowdfunding untuk Komunitas Teman Peduli.</Card.Text>
//                         </Card.Footer>
//                     </Card>
//                 </Col>
//                 <Col md={3} className="mt-3">
//                     <Card >
//                         <Card.Body>

//                             <div
//                                 style={{
//                                     backgroundImage: "url('./img/temanpeduli.png')"
//                                 }}
//                                 className='image-background'>
//                                 <Button variant="primary">Lihat</Button>

//                             </div>
//                         </Card.Body>
//                         <Card.Footer className="text-muted">
//                             <Card.Title>Teman Peduli</Card.Title>
//                             <Card.Text>Apps Crowdfunding untuk Komunitas Teman Peduli.</Card.Text>
//                         </Card.Footer>
//                     </Card>
//                 </Col>
//                 <Col md={3} className="mt-3">
//                     <Card >
//                         <Card.Body>

//                             <div
//                                 style={{
//                                     backgroundImage: "url('./img/temanpeduli.png')"
//                                 }}
//                                 className='image-background'>
//                                 <Button variant="primary">Lihat</Button>

//                             </div>
//                         </Card.Body>
//                         <Card.Footer className="text-muted">
//                             <Card.Title>Teman Peduli</Card.Title>
//                             <Card.Text>Apps Crowdfunding untuk Komunitas Teman Peduli.</Card.Text>
//                         </Card.Footer>
//                     </Card>
//                 </Col>
//                 <Col md={3} className="mt-3">
//                     <Card >
//                         <Card.Body>

//                             <div
//                                 style={{
//                                     backgroundImage: "url('./img/temanpeduli.png')"
//                                 }}
//                                 className='image-background'>
//                                 <Button variant="primary">Lihat</Button>

//                             </div>
//                         </Card.Body>
//                         <Card.Footer className="text-muted">
//                             <Card.Title>Teman Peduli</Card.Title>
//                             <Card.Text>Apps Crowdfunding untuk Komunitas Teman Peduli.</Card.Text>
//                         </Card.Footer>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     )
// }

export default Mobile