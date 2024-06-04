import { Container, Card, Col, Row } from "react-bootstrap";
import { skills } from "../constants/skills";
import "../styles/skills.css";

function Skills() {
  return (
    <Container className="px-3 px-md-5">
      <Row>
        {skills.map((group) => (
          <Col key={group.group} className="col py-3">
            <Card>
              <div className="card-header">{group.group}</div>
              <div className="card-body">
                <div>
                  {group.skills.map((skill) => (
                    <div className="skill-div" key={skill.name}>
                      <img
                        id={skill.name}
                        src={skill.imgSrc}
                        className="skill-icon"
                        alt="..."
                      />
                      <h5 className="card-title">{skill.name}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
