import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
          <p style={{ textAlign: "center", fontSize: "1.5em"}}>
            <span className="purple">Privacy Policy:</span>
          </p>
          <p style={{ textAlign: "justify", fontSize: "0.9em" }}>
            <br />Cosmos doesn't keep any user or guild information by default. It doesn't need any personal information to function normally. This exception breaks, when a user subscribes for Astronomy Picture Of the Day(APOD) service.
            <br />
            <br /> When you subscribe to APOD service, we store the following Discord data:
            <br />
            <span className="purple"> - Discord Channel ID.</span>
            <br />
            <br />If the user unsubscribe, then we delete all the data that we have stored previously. If you have any questions or feel bad about the information, what we store, feel free to tell us why by reporting it through Cosmos or contacting with us on our <a href='https://discord.gg/XX9p5qUkuj'>support server</a>.
            <br />
            <br />
            <br />
            <br />
          </p>
          <p style={{ textAlign: "center", fontSize: "1.5em"}}>
            <span className="purple">Terms of Service:</span>
          </p>
          <p style={{ textAlign: "justify", fontSize: "0.9em" }}>
            <br />These are the terms you agree to by using Cosmos. You must accede to the terms outlined in this document. If you are unable to do so, we recommend that you do not use Cosmos. You must abide by the Discord Terms of Service. You must be at least 13 or above the age of what your country deems legal to be on the internet and have your data being collected or stored.
            <br />
            <br /> Using Cosmos, you must not:
            <br />
            <span className="purple"> - Use Cosmos to perform illegal activities.</span>
            <br /><span className="purple"> - Knowingly use Cosmos in a way it is not intended without reporting it.</span>
            <br /><span className="purple"> - Abuse Cosmos' services, e.g. using report command to abuse it's support server.</span>
            <br />
            <br />We reserve the right to prevent you from using Cosmos as a service at any time and for any reason. Therefore, kindly follow guidelines, which are outlined above this message.
            <br />
            <br /><strong className="purple">       YOU ALONE ARE RESPONSIBLE FOR THE ACTIONS YOU MAKE. </strong>
            <br />
            <br />
            <br />
            <br />
          </p>
          <p style={{ textAlign: "center", fontSize: "1.5em"}}>
            <span className="purple">Credits:</span>
          </p>
          <p style={{ textAlign: "justify", fontSize: "0.9em" }}>
            <br />We are grateful for these discord servers for inviting Cosmos in the first place. They tested it and used it's commends a lot:
            <br />
            <br /><span className="purple">
    1. Space Enthusiast<br />
    2. Venuscape<br />
    3. +Build Your Dream Python Project<br />
    4. Programming Hub<br />
    5. Maik's Astro Garden<br /><br />
    </span>Special thanks to <span className="purple">DucK</span> and <span className="purple">Cosmic Era 乛ᴵᶜ🚀#8127</span> who helped us a lot, and gave a tons of good advices (:
          </p> THANK YOU GUYS!
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
