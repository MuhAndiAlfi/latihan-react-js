import Container from "react-bootstrap/esm/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

function Footbar() {
    return (
        <Container
            fluid="fluid"
            style={{
                backgroundColor: "#111a2b",
                color: "white"
            }}>
            <Container>
                <Row >
                    <Col>
                        <img src="./logo.svg" className="img" height="50px"/>
                        <p>PT Bara Prima Multi Teknovasi</p>
                        <p>Think Smart Solution</p>
                    </Col>
                    <Col className="text-end">
                        <p>Kantor Utama</p>
                        <p>Jl. Jend. H. Amir Machmud No.260B, Sukaraja
                            <br/>Kec. Cicendo, Kota Bandung, Jawa Barat 40175
                        </p>
                        <p>0816-593-922 info@bara.co.id</p>
                        <p className="font-weight-ligh">© Copyright 2021 Bara Enterprise, All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footbar