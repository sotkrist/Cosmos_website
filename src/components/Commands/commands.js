import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "left", padding: "90px" }}>
          <Col
            md={10}
            style={{
              justifyContent: "justifyContent",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
          <p style={{ textAlign: "center", fontSize: "1.5em"}}>
            <span className="purple">Commands(29):</span>
          </p>
          <p style={{ textAlign: "justify", fontSize: "0.9em" }}>
            <br />Heres a list of all my commands, which you can use currently. Type <span className="purple">/ </span>to use them.<p style={{fontSize: "0.9em"}}>(Arguments surrounded in <span className="yellow">[ ]</span> are required arguments, you need to pass them in)</p>
          </p>
          <p style={{ textAlign: "justify" }}>
            <p className="home-about-body"><span className="purple">Astronomy commands(21):</span></p>
            <ul>
              <li className="about-activity">
                <span className="purple">find <span className="yellow">[celestial]:</span></span> Fetch information of any celestial-body in our Solar System.
              </li>
              <li className="about-activity">
                <span className="purple">sky <span className="yellow">[location]:</span></span> Get the sky-map for any specified location.
              </li>
              <li className="about-activity">
                <span className="purple">lookup <span className="yellow">[id]:</span></span> Lookup a specific Asteroid based on its ID.
              </li>
              <li className="about-activity">
                <span className="purple">search <span className="yellow">[keywords]:</span></span> Search images or videos in NASA's library.
              </li>
              <li className="about-activity">
                <span className="purple">rover:</span> View the most recent images from the Mars Rover.
              </li>
              <li className="about-activity">
                 <span className="purple">epic:</span> View an image of Earth and it's astronomical events.
              </li>
              <li className="about-activity">
                 <span className="purple">jameswebb:</span> Get the current status of the James Webb Space Telescope.
              </li>
              <li className="about-activity">
                 <span className="purple">neo:</span> Get a list of the current Near-Earth-Objects.
              </li>
              <li className="about-activity">
                 <span className="purple">iss:</span> Get the International Space Station's current location.
              </li>
              <li className="about-activity">
                 <span className="purple">apod:</span>  View the Astronomy Picture Of the Day.
              </li>
              <li className="about-activity">
                 <span className="purple">insight:</span> Get weather updates on Mars.
              </li>
              <li className="about-activity">
                 <span className="purple">fact:</span> Read intresting facts about our wondeful galaxy.
              </li>
              <li className="about-activity">
                 <span className="purple">spacex:</span> See an anonncament of the lastest launch by SpaceX.
              </li>
              <li className="about-activity">
                 <span className="purple">solarsystem:</span> Get live data of our Solar System, and its celestials position.
              </li>
              <li className="about-activity">
                 <span className="purple">astronauts:</span> Get the current number of astronauts who are in space.
              </li>
              <li className="about-activity">
                 <span className="purple">tle:</span> Get the current satellites orbiting around the earth.
              </li>
              <li className="about-activity">
                 <span className="purple">count:</span> View my astronomical Solar System API's object count.
              </li>
              <li className="about-activity">
                 <span className="purple">geoidheight <span className="yellow">[latitude] [longitude]:</span></span> Get geoid height at any position.
              </li>
              <li className="about-activity">
                 <span className="purple">gravityanomaly <span className="yellow">[latitude] [longitude]:</span></span> Get gravity anomaly at any position.
              </li>
              <li className="about-activity">
                 <span className="purple">moonphase <span className="yellow">[day] [month] [year]:</span></span> Get moon phase at any date.
              </li>
              <li className="about-activity">
                 <span className="purple">deltav <span className="yellow">[mass_inital] [mass_final] [Isp] [thrust] [engines]:</span></span> Calculate DeltaV values.
              </li>
            </ul>
          </p>
          <p className="home-about-body"><span className="purple">Bot commands(8):</span></p>
            <ul>
              <li className="about-activity">
                 <span className="purple">subscribe <span className="yellow">[channel]:</span></span> Subscribe to APOD service. (admin)
              </li>
              <li className="about-activity">
                 <span className="purple">unsubscribe <span className="yellow">[channel]:</span></span> Unsubscribe from APOD service. (admin)
              </li>
              <li className="about-activity">
                 <span className="purple">report <span className="yellow">[description]:</span></span> Report bugs to help my developers improving me.
              </li>
              <li className="about-activity">
                 <span className="purple">devnews:</span> Get the latest letter from my developers.
              </li>
              <li className="about-activity">
                 <span className="purple">patch:</span> Write a new patch (only accessible to my developers).
              </li>
              <li className="about-activity">
                 <span className="purple">help:</span> Get a list of my commands.
              </li>
              <li className="about-activity">
                 <span className="purple">info:</span> Get basic information of me.
              </li>
              <li className="about-activity">
                 <span className="purple">ping:</span> Test my response latency.
              </li>
          </ul>
        </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
