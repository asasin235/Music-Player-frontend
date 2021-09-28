import { Container, Row, Col, Button } from "react-bootstrap";
import Participants from '../Participants/Participants';
import Textarea from '../TextArea/TextArea';
import './JoinRoomForm.css'
import {BsEyeFill} from 'react-icons/bs'


function joinRoomForm(){

    return (
<div className="loginFormPage">
        <Container fluid>
          <Row sm={2} xs={1}>
            <Col>
              <h1>Create Room</h1>
            </Col>
            <Col className='d-flex justify-content-end'>
              <Button size='lg' className='create-room-button'>
                HOW TO PLAY
              </Button>
            </Col>
          </Row>
        </Container>
        <Container fluid>

  <Col>
    <div className='input-div'>
      <h3>Room ID:</h3>
      <div className='text-div'>
        <input type='text' />
        <Button>Check Server</Button>
      </div>
    </div>

    <div className='input-div'>
      <h3> Passcode: </h3>
      <div className='text-div'>
        <input type='password' />
        <Button><BsEyeFill /></Button>
      </div>
    </div>

    
  </Col>

</Container>
</div>
    )
}

export default joinRoomForm
 