
import './App.scss';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Environment, Scroll, ScrollControls, Sparkles, Float } from '@react-three/drei';
import project1 from './assets/images/pronounce.PNG'
import project2 from './assets/images/colombotodo.PNG'
import project3 from './assets/images/portfolio.PNG'
import {Bird} from './models/Bird';
import {Butterfly} from './models/Butterfly';
import { BsGithub, BsLinkedin} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si';



function App() {


  return (
    <>
      <color attach="background" args={["#000000"]} />

      <Environment preset="warehouse" />

      <ScrollControls pages={5} damping={0.25}>

        <Scroll>

          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={1} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
            className='float1'
            
          >
            <Bird scale={2} position={[0,-2.5,0]}/>
        
          </Float>

          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={0} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[0,2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
            
          >
            {/* <Butterfly className="butterfly" scale={0.8} position={[0,-28,0]}/> */}
        
          </Float>

          <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={"#FFD2BE"} opacity={10} scale={[20, 100, 20]}></Sparkles>
          <Sparkles noise={0} count={50} speed={0.01} size={10} color={"#FFF"} opacity={2} scale={[30, 100, 10]} ></Sparkles>
        </Scroll>

        <Scroll html style={{ width: "100%" }}>

          <Container className="App__container" id = "about">

            <Row className="App__row" >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>Hello. I'm Chathurika.</h1>
                  <p>Junior Full-Stack Developer based in Toronto, Canada.</p>
                </div>
              </Col>
            </Row>

            <Row className="App__row App__row-skills"  id='skills' >
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

            <Row className="App__row App__row-contact" id="contact" >
              <Col xs={6}>
                <div id="contact" name="contact">
                  <h2 style={{ marginBottom: '0px' }}>Contact</h2>
                </div>

                <div className='App__icons'>
                  <BsGithub color='white' size='60px' cursor= 'pointer' />
                  <BsLinkedin  color='white' size='60px' cursor= 'pointer' />
                  <SiGmail color='white' size='60px' cursor= 'pointer'/>
                
                </div>
              </Col>
            </Row>



          

          </Container>
          

        </Scroll>
        

      </ScrollControls>

    </>
  );
}

export default App;

