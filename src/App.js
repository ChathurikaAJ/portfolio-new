import './App.scss';
import { Container, Row, Col} from 'react-bootstrap';
import { Environment, Scroll, ScrollControls, Sparkles, Float } from '@react-three/drei';
import {Bird} from './models/Bird';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';



function App() {

  return (
    <>
      <color attach="background" args={["#000000"]} />

      <Environment preset="warehouse" />

      <ScrollControls pages={5} damping={0.25}>

        <Scroll>

          <Float
            speed={1} 
            rotationIntensity={1} 
            floatIntensity={0.2} 
            floatingRange={[1, 1]} 
            className='float1'
          >
            <Bird scale={2} position={[0,-2.5,0]}/>
        
          </Float>

          <Float
            speed={1} 
            rotationIntensity={0}
            floatIntensity={0.5} 
            floatingRange={[0,2]} 
          >
        
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

            <Skills />
            <Projects />
            <Contact />

          </Container>
          
        </Scroll>
        
      </ScrollControls>

    </>
  );
}

export default App;

