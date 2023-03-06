
import './App.scss';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Environment, Scroll, ScrollControls, Sparkles, Float } from '@react-three/drei';
import project1 from './assets/images/pronounce.PNG'
import project2 from './assets/images/colombotodo.PNG'
import { useState } from 'react';
import {Lotus} from './models/Lotus'
import {Bird} from './models/Bird'


function App() {

  const [click, setClick] = useState(false)

  const handleClick = ()=>{
    setClick(!click)
  }

  return (
    <>
      <color attach="background" args={["#000000"]} />

      <Environment preset="warehouse" />

      <ScrollControls pages={3} damping={0.25}>

        <Scroll>

        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Bird scale={2} position={[0,-2.5,0]}/>
       
        </Float>



          <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={"#FFD2BE"} opacity={10} scale={[20, 100, 20]}></Sparkles>
          <Sparkles noise={0} count={50} speed={0.01} size={10} color={"#FFF"} opacity={2} scale={[30, 100, 10]} ></Sparkles>
        </Scroll>

        <Scroll html style={{ width: "100%" }}>
          <Container className="App__container">

            <Row className="App__row">
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px" }}>Hello. I'm Chathurika.</h1>
                  <p>Junior Full-Stack Developer based in Toronto, Canada.</p>
                </div>
              </Col>
            </Row>

            <Row className="App__row App__row-skills" >
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

            <Row className="App__row App__row-projects" >
              <Col>
                <div className="App__column">
                  <h2 style={{ marginBottom: '0px' }}>Projects</h2>
                </div>
                <Container>
                  <Row className="App__container" onClick={handleClick}>
                    <Col md={4}>
                      <Card mb={3} className={click ? "transition card1" : "App__card card1"}>
                        <img className="App__image" src={project1} alt="PronounceAppp" />
                        <h3 className="App__card-text">Pronounce</h3>
                        <p className="App__card-text">sdlshdhskjfhskjhfkjshkjfhskjhfsf</p>
                        <div>
                          <Button>Github</Button>
                          <Button>Demo</Button>
                        </div>
                      </Card>
                    </Col>
                    <Col md={4}>
                      <Card mb={3} className={click ? "transition card2" : "App__card card2"}>
                        <img className="App__image" src={project2} alt="PronounceAppp" />
                        <h3 className="App__card-text">TEST 1</h3>
                        <p className="App__card-text">sdlshdhskjfhskjhfkjshkjfhskjhfsf</p>
                        <div>
                          <Button>Github</Button>
                          <Button>Demo</Button>
                        </div>
                      </Card>
                    </Col>
                    <Col md={4}>
                      <Card mb={3} className={click ? "transition card3" : "App__card card3"}>
                        <img className="App__image" src={project1} alt="PronounceAppp" />
                        <h3 className="App__card-text">TEST 2</h3>
                        <p className="App__card-text">sdlshdhskjfhskjhfkjshkjfhskjhfsf</p>
                        <div>
                          <Button>Github</Button>
                          <Button>Demo</Button>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Col>



            </Row>



          

          </Container>

        </Scroll>

      </ScrollControls>

    </>
  );
}

export default App;

