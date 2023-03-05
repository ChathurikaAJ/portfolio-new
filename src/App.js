
import './App.scss';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Environment, Scroll, ScrollControls, Sparkles, Float } from '@react-three/drei';
import project1 from './assets/images/pronounce.PNG'
import project2 from './assets/images/colombotodo.PNG'

function App() {
  return (
    <>
      <color attach="background" args={["#000000"]} />

      <Environment preset="warehouse" />

      <ScrollControls pages={3} damping={0.25}>

        <Scroll>
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
                <div>
                  <h2 style={{ marginBottom: '0px' }}>Projects</h2>
                </div>
                <Container>
                  <Row>
                    <Col md={4}>
                      {/* <Float
                        speed={1} // Animation speed, defaults to 1
                        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
                        floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                        floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                      
                      > */}
                        <Card mb={3} className="App__card">
                          <img className="App__image" src={project1} alt="PronounceAppp" />
                          <h3>Pronounce</h3>
                          <p>sdlshdhskjfhskjhfkjshkjfhskjhfsf</p>
                          <div>
                            <Button>Github</Button>
                            <Button>Demo</Button>
                          </div>
                        </Card>
                      {/* </Float> */}

                    </Col>
                  </Row>
                </Container>
              </Col>



            </Row>



            {/* 
        <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" src={project1} alt="Pronounce"/>
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

          </Container>

        </Scroll>

      </ScrollControls>

    </>
  );
}

export default App;
