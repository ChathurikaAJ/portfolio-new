import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { Row, Col } from 'react-bootstrap';

const Contact = () => {
    return (
        <Row className="App__row App__row-contact" id="contact" >
            <Col xs={6}>
                <div id="contact" name="contact">
                    <h2 style={{ marginBottom: '0px' }}>Contact</h2>
                </div>

                <div className='App__icons'>
                    <a href="https://github.com/ChathurikaAJ" target="_blank" rel="noreferrer">
                        <BsGithub color='white' size='60px' cursor='pointer' />
                    </a>
                    <a href="https://www.linkedin.com/in/chathurika-jayakody" target="_blank" rel="noreferrer">
                        <BsLinkedin color='white' size='60px' cursor='pointer' />
                    </a>
                    <a href="mailto:chathurika.jayakody@gmail.com">
                        <SiGmail color='white' size='60px' cursor='pointer' />
                    </a>

                </div>
            </Col>
        </Row>
    )
}

export default Contact