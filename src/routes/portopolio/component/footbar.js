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
            <div>
                <a href="#" className="btn-go-top">
                    <i className="fa-solid fa-angle-up"></i>
                </a>
            </div>

            <Container className="mt-5">
                <Row >
                    <Col md={6} className="text-center text-md-start">
                        <img src="./logo.svg" className="img" height="50px"/>
                        <p className="bara-footer-title">PT Bara Prima Multi Teknovasi</p>
                        <p>Think Smart Solution</p>

                        <a
                            href="https://www.facebook.com/baraenterprise"
                            className="social fa-brands fa-facebook-f"
                            style={{
                                marginRight: '10px'
                            }}></a>

                        <a
                            href="https://www.youtube.com/channel/UC-19_0tHD6eA9vY_ozCEGTQ"
                            className="social fa-brands fa-youtube"></a>

                        <a
                            href="https://www.tiktok.com/@bara.enterprise"
                            className="social fa-brands fa-tiktok"></a>

                        <a
                            href="https://www.instagram.com/baraenterprise/"
                            className="social fa-brands fa-instagram"></a>

                    </Col>
                    <Col md={6} className="text-center text-md-end mt-4">
                        <p className="kantor-utama">Kantor Utama</p>
                        <p>Jl. Jend. H. Amir Machmud No.260B, Sukaraja
                            <br/>Kec. Cicendo, Kota Bandung, Jawa Barat 40175
                        </p>
                        <p>0816-593-922 info@bara.co.id</p>
                        <p className="copyright">© Copyright 2021 Bara Enterprise, All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footbar