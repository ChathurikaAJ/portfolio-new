import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import project1 from '../assets/images/pronounce.PNG'
import project2 from '../assets/images/colombotodo.PNG'
import project3 from '../assets/images/portfolio.PNG'
import demo from "../assets/videos/demo.mp4"
import { useState } from 'react';

const Projects = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
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
                                        <Button className="App__button">
                                            <a href="https://github.com/ChathurikaAJ/chathurika-jayakody-pronounce" target="_blank" rel="noreferrer">Github</a>
                                        </Button>
                                        <Button className="App__button" onClick={handleShow}><a>Demo</a></Button>
                                    </div>
                                </Card>
                            </Col>
                            <Col md={4} className="App__container-cards">
                                <Card mb={3} className="App__card">
                                    <img className="App__image" src={project2} alt="PronounceAppp" />
                                    <h3 className="App__card-text">ColomboToDo</h3>
                                    <p className="App__card-text App__card-text-details">Blog post about restaurants and events in Colombo, Sri Lanka</p>
                                    <div className="App__buttons">
                                        <Button className="App__button">
                                            <a href="https://github.com/ChathurikaAJ/colombo-to-do-blog" target="_blank" rel="noreferrer">Github</a>
                                        </Button>
                                        <Button className="App__button">
                                            <a href="https://colombotodo.com/" target="_blank" rel="noreferrer">Site</a>
                                        </Button>
                                    </div>
                                </Card>
                            </Col>
                            <Col md={4} className="App__container-cards">
                                <Card mb={3} className="App__card">
                                    <img className="App__image" src={project3} alt="PronounceAppp" />
                                    <h3 className="App__card-text">Portfolio</h3>
                                    <p className="App__card-text App__card-text-details">My portfolio site</p>
                                    <div className="App__buttons">
                                        <Button className="App__button">
                                            <a href="https://github.com/ChathurikaAJ/portfolio-new" target="_blank" rel="noreferrer">Github</a>
                                        </Button>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose}>
                <video controls className="projectcard__video">
                    <source src={demo} type="video/mp4" />
                </video>
            </Modal>
        </>
    )
}

export default Projects