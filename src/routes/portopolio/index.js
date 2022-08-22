import Container from "react-bootstrap/esm/Container"
import Navbar from "./component/navbar"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Website from "./component/website"
import Mobile from "./component/mobile"
import Footbar from "./component/footbar";


function Portofolio() {
    return (
        <div>
            <title>Portopolio</title>
            <Navbar/>
            <Container className="mt-5 mb-5">
                <h1 className="text-center">OUR WORKS</h1>
                <p className="text-center">Some Great Solution</p>
                <Tabs defaultActiveKey="website" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="website" title="Website">
                        <Website/>
                    </Tab>
                    <Tab eventKey="mobile" title="Mobile">
                        <Mobile/>
                    </Tab>
                    <Tab eventKey="desktopapp" title="Desktop App" disabled></Tab>
                </Tabs>
            </Container>
            <Footbar/>
        </div>

    )
}

export default Portofolio