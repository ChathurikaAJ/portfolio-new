import { Container, Row, Col} from 'react-bootstrap';

const Skills = () => {
    return (
        <Row className="App__row App__row-skills" id='skills' >
            <Col xs={6}>

                <div>
                    <h2 style={{ marginBottom: '0px' }}>Skills</h2>
                </div>

                <Container>
                    <Row>
                        <Col><p>HTML</p></Col>
                        <Col><p>JavaScript</p></Col>
                        <Col><p>CSS</p></Col>
                        <Col><p>Sass</p></Col>
                        <Col><p>ReactJS</p></Col>
                        <Col><p>NodeJS</p></Col>
                        <Col><p>ExpressJS</p></Col>
                        <Col><p>NextJS</p></Col>
                        <Col><p>MySQL</p></Col>
                        <Col><p>TailwindCSS</p></Col>
                    </Row>
                </Container>

            </Col>
        </Row>
    )
}

export default Skills