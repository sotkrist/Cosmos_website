import React from "react";
import {FaDiscord} from  "react-icons/fa"
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={9} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body"><b className="purple">I am an advanced astronomy discord bot providing you with over 28 commands, with each track of what's happening in space!</b>
              <br />My purpose is to educate people about the universe and its secrets. Space is the greatest mystery right now, thus it's never too late to understand it.
               If you like space and want to explore it, simply invite me. I collect data from 100+ satellites in the hopes of discovering something unexpected, maybe one day I will succeed.
              <br />
            </p>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ textAlign: "justify", fontSize: "2em" }}>
              OUR <span className="purple"> TEAM </span>:
            </h1>
            <p style={{ textAlign: "justify" }}>
            <br />Main developer:<span className="purple"> R2#8184(founder of R2 systems co-operations)</span>
            <br />Head supporter:<span className="purple"> 𝘾𝙤𝙨𝙢𝙞𝙘 𝙇𝙞𝙡𝙖𝙘 ♡#7157</span></p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
          <br /><br /><br />
            <p>
              Feel free to <span className="purple">connect </span>with us
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://discord.gg/XX9p5qUkuj"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/sotkrist"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
              <a
                href="https://www.youtube.com/channel/UCvgWKK9iDc4drrBLDpSehhA"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <  AiFillYoutube />
              </a>
              </li>
            </ul>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{textAlign: "left", fontSize: "1em" }}>
              Cosmos version: <span className="purple">3.0.0</span>
              <br />
              Website version: <span className="purple">1.0.0</span>
            </h1>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
