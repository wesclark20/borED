import { Container, Row, Col, Stack } from "react-bootstrap";
import ProfileCard from "./ProfileCard";

function Footer() {
  return (
    <Container fluid>
      <h1>Our Mission</h1>
      <Col md={8}>
        AfforDEable is DE's newest and easiest way to give back to your
        community. We believe that charity on a local scale brings together
        people more than anything else. AfforDEable and its employees know the
        joy in seeing the impact an individual can have on their environment.
        AfforDEable wants to foster that spirit and spread it to all Delaware
        residents. The First State will always be First to AfforDEable.
      </Col>
      <h2>Our Team</h2>
      <Col md={8}>
        AfforDEable is a team of 4 students from the University of Delaware. We
        are all Engineering Students and are excited to give back to our
        community. We are all from Delaware and have seen the impact that local
        charities can have on the community. We are excited to bring that impact
        to the rest of the state.
      </Col>
      <h3>Our Contact Information</h3>
      <Row>
        <Col>
          <ProfileCard
            name={"Ian Duffy"}
            email={"ianduffy@udel.edu"}
            bio={"Sophomore Computer Science: Cyber Security Student"}
          />
        </Col>
        <Col>
          <ProfileCard
            name={"Michael Lutz"}
            email={"mplutz@udel.edu"}
            bio={"Freshman Computer Science Student"}
          />
        </Col>
        <Col>
          <ProfileCard
            name={"Michael Lutz"}
            email={"mplutz@udel.edu"}
            bio={"Freshman Computer Science Student"}
          />
        </Col>
        <Col>
          <ProfileCard
            name={"Michael Lutz"}
            email={"mplutz@udel.edu"}
            bio={"Freshman Computer Science Student"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;