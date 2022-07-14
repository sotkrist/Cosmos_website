import React from "react";
import {FaDiscord} from  "react-icons/fa"
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} R2 systems co-operations</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://discord.gg/XX9p5qUkuj"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/sotkrist"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
            <a
              href="https://www.youtube.com/channel/UCvgWKK9iDc4drrBLDpSehhA"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <  AiFillYoutube />
            </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
