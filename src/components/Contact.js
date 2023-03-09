import { BsGithub, BsLinkedin} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';
import {Row, Col } from 'react-bootstrap';

const Contact = () => {
    return (
        <Row className="App__row App__row-contact" id="contact" >
            <Col xs={6}>
                <div id="contact" name="contact">
                    <h2 style={{ marginBottom: '0px' }}>Contact</h2>
                </div>

                <div className='App__icons'>
                    <BsGithub color='white' size='60px' cursor='pointer' />
                    <BsLinkedin color='white' size='60px' cursor='pointer' />
                    <SiGmail color='white' size='60px' cursor='pointer' />

                </div>
            </Col>
        </Row>
    )
}

export default Contact