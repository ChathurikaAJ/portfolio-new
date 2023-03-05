
import './App.scss';
import { Container, Row, Col, Button} from 'react-bootstrap';
import { Environment, Scroll, ScrollControls } from '@react-three/drei';

function App() {
  return (
    <>
      <color attach="background" args={["#000000"]}/>

      <Environment preset="warehouse"/>

      <ScrollControls pages={3} damping={0.25}>

        <Scroll>

        </Scroll>

        <Scroll html style={{width:"100%"}}>
          <Container className="App__container">
            <Row className="App__row">
              <Col xs={6}>
                <div>
                  <h1 style={{marginBottom:"0px"}}>Hello. I'm Chathurika.</h1>
                  <p>Junior Full-Stack Developer based in Toronto, Canada.</p>
                </div>
              </Col>
            </Row>

            <Row className='text-center align-items-center justify-content-center' style={{position:'absolute', width:'100%', height:'100vh', padding:'0px 30px', top:'70vh'}}>
              <Col xs={6}>
                <div>
                  <h2 style={{marginBottom:'0px'}}>Skills</h2>
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

          </Container>

        </Scroll>

      </ScrollControls>
    
    </>
  );
}

export default App;
