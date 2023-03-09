import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import project1 from '../assets/images/pronounce.PNG'
import project2 from '../assets/images/colombotodo.PNG'
import project3 from '../assets/images/portfolio.PNG'

const Projects = () => {
    return (
        <Row className="App__row App__row-projects" id="projects" >
            <Col>
                <div className="App__column">
                    <h2 style={{ marginBottom: '0px' }}>Projects</h2>
                </div>
                <Container>
                    <Row className="App__container" >
                        <Col md={4} className="App__container-cards">
                            <Card mb={3} className="App__card" >
                                <img className="App__image" src={project1} alt="PronounceAppp" />
                                <h3 className="App__card-text">Pronounce</h3>
                                <p className="App__card-text App__card-text-details">Pronunciation assessment app</p>
                                <div className="App__buttons">
                                    <Button className="App__button">Github</Button>
                                    <Button className="App__button">Demo</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4} className="App__container-cards">
                            <Card mb={3} className="App__card">
                                <img className="App__image" src={project2} alt="PronounceAppp" />
                                <h3 className="App__card-text">ColomboToDo</h3>
                                <p className="App__card-text App__card-text-details">Blog post about restaurants and events in Colombo, Sri Lanka</p>
                                <div className="App__buttons">
                                    <Button className="App__button">Github</Button>
                                    <Button className="App__button">Site</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4} className="App__container-cards">
                            <Card mb={3} className="App__card">
                                <img className="App__image" src={project3} alt="PronounceAppp" />
                                <h3 className="App__card-text">Portfolio</h3>
                                <p className="App__card-text App__card-text-details">My portfolio site</p>
                                <div className="App__buttons">
                                    <Button className="App__button">Github</Button>
                                    <Button className="App__button">Site</Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}

export default Projects