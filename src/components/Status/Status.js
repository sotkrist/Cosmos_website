import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "left", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
          <p style={{ textAlign: "justify" }}>
            <p className="home-about-body"><span className="purple">Status:</span></p>
            <ul>
              <li className="about-activity">
                Cosmos is <span className="green">ONLINE</span>.
              </li>
            </ul>
          </p>
          <p style={{ textAlign: "justify" }}>
            <p className="home-about-body"><span className="purple">News:</span></p>
            <ul>
              <li className="about-activity">
                 <span className="purple">10/07/2022: </span> Migrated from discord.py to nextcord.
              </li>
              <li className="about-activity">
                 <span className="purple">11/05/2022: </span> Our website got a domain!
              </li>
              <li className="about-activity">
                 <span className="purple">06/05/2022:</span> We have reached 100 servers!
              </li>
              <li className="about-activity">
                 <span className="purple">03/05/2022:</span> Swithced to slash commands!
              </li>
              <li className="about-activity">
                 <span className="purple">02/05/2022:</span> Cosmos got verified by Discord!
              </li>
              <li className="about-activity">
                 <span className="purple">27/04/2022:</span> Cosmos finally reached 75+ servers!
              </li>
              <li className="about-activity">
                 <span className="purple">02/03/2022:</span> 1.0 version has been launched!
              </li>
            </ul>
          </p>
          <p className="home-about-body"><span className="purple">Versions:</span><p style={{fontSize: "0.8em"}}>(<span className="yellow">commands</span>, <span className="green">the lines of python code</span>)</p></p>
          <ul>
            <li className="about-activity">
               <span className="purple">3.0.0</span> - new/updated commands (<span className="yellow">29</span>, <span className="green">790</span>)
            </li>
            <li className="about-activity">
               <span className="purple">2.9.0</span> - removed Astronomy-database, migrated to nextcord (<span className="yellow">28</span>, <span className="green">743</span>)
            </li>
            <li className="about-activity">
               <span className="purple">2.8.0</span> - optimization of commands (<span className="yellow">33</span>, <span className="green">947</span>)
            </li>
            <li className="about-activity">
               <span className="purple">2.7.0</span> - new commands, APOD service (<span className="yellow">33</span>, <span className="green">930</span>)
            </li>
            <li className="about-activity">
               <span className="purple">2.6.0</span> - celestial / API improvment, new commands (<span className="yellow">29</span>, <span className="green">787</span>)
            </li>
            <li className="about-activity">
               <span className="purple">2.5.0</span> - stabilized Cosmos (<span className="yellow">27</span>, <span className="green">740</span>)
            </li>
            <li className="about-activity">
               <span className="purple">2.4.0</span> - API speed up (<span className="yellow">27</span>, <span className="green">730</span>)
            </li>
            <li className="about-activity">
               <span className="purple">2.3.0</span> - bug fixes, code rewrite (<span className="yellow">27</span>, <span className="green">735</span>)
            </li>
            <li className="about-activity">
               <span className="purple">2.2.0</span> - deleted/added commands (<span className="yellow">28</span>, <span className="green">795</span>)
            </li>
            <li className="about-activity">
               <span className="purple">2.1.0</span> - new commands, full test (<span className="yellow">29</span>, <span className="green">801</span>)
            </li>
            <li className="about-activity">
               <span className="purple">2.0.0</span> - switched to slash commands (<span className="yellow">27</span>, <span className="green">790</span>)
            </li>
            <li className="about-activity">
               <span className="purple">1.9.0</span> - rewrote for privacy policy (<span className="yellow">28</span>, <span className="green">971</span>)
            </li>
            <li className="about-activity">
               <span className="purple">1.8.0</span> - new commands, bug fixes(<span className="yellow">28</span>, <span className="green">974</span>)
            </li>
            <li className="about-activity">
               <span className="purple">1.7.0</span> - new command (<span className="yellow">26</span>, <span className="green">917</span>)
            </li>
            <li className="about-activity">
               <span className="purple">1.6.0</span> - bug fixes (<span className="yellow">25</span>, <span className="green">891</span>)
            </li>
            <li className="about-activity">
               <span className="purple">1.5.0</span> - supported version (<span className="yellow">25</span>, <span className="green">810</span>)
            </li>
            <li className="about-activity">
               <span className="purple">1.4.0</span> - major bug fixes, full test (<span className="yellow">25</span>, <span className="green">805</span>)
            </li>
            <li className="about-activity">
               <span className="purple">1.3.0</span> - new commands, full grammer check/rewrite (<span className="yellow">25</span>, <span className="green">805</span>)
            </li>
            <li className="about-activity">
               <span className="purple">1.2.0</span> - new command, bug fixes (<span className="yellow">17</span>, <span className="green">641</span>)
            </li>
            <li className="about-activity">
               <span className="purple">1.1.0</span> - new commands, bug fixes (<span className="yellow">16</span>, <span className="green">644</span>)
            </li>
            <li className="about-activity">
               <span className="purple">1.0.0</span> - first launched version of Cosmos (<span className="yellow">13</span>, <span className="green">585</span>)
            </li>
          </ul>
        </Col>
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
