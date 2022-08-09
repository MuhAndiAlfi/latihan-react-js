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
            <Navbar/>
            <Container>
                <h1 className="text-center">OUR WORKS</h1>
                <p className="text-center">Some Great Solution</p>
                <Tabs defaultActiveKey="website" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="website" title="Website">
                        <Website/>
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        <Mobile/>
                    </Tab>
                    <Tab eventKey="desktopapp" title="Desktop App" disabled="disabled"></Tab>

                </Tabs>
            </Container>
            <Footbar/>
        </div>

    )
}

export default Portofolio