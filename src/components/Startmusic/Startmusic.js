import React from "react";
import './startmusic.css'
import {Row,Button,Col,Form,InputGroup,Image,Container} from 'react-bootstrap'
import { FaPlay, FaCloudUploadAlt } from "react-icons/fa";
const Startmusic = () => {
    return (
        <div className='start-music-body'>
            <header className='start-music-header'>Add  your songs here ...</header>
            <form className='start-music-add-form'>
                <div className='form-control'>
                    <span className='start-music-add'>
                        <input type='text' placeholder=' Paste link here' className='start-music-pastlink'/>

                        <button className='btn-tbn-block-cloud'> 
                         </button>

                        <button className='btn-tbn-block-add'> ADD </button>
                    </span>
                    
                </div>
                <div className='form-control'>
                    <span className='start-music-remove'>
                    <button className='btn-tbn-block-music'>  </button>
                    <input type='text' placeholder=
                    'Song Title - Fetched from link 04:00' className='start-music-songtitle' />

                    <button className='btn-tbn-block-pouse'> 
                     </button>

                    <button className='btn-tbn-block-remove'> REMOVE </button>
                   
                    </span>
                </div>

                <input type='submit' value='START GAME' className='btn-tbn-block' />
        </form>
        {/* <Container>
        <Row xs={1} md={2} className='mb-2 px-4'>
            <Col xs={12} md={10}>
              <InputGroup>
                <Form.Control type='url' placeholder='Place link here' />
                <InputGroup.Text className='px-1'>
                  <FaCloudUploadAlt
                    style={{ fontSize: "24px", width: "50px" }}
                  />
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col xs={12} md={2}>
              <Button className='btn-light' style={{ width: "100%" }}>
                ADD
              </Button>
            </Col>
          </Row>

          <Row xs={1} md={2} className='mb-2 px-4'>
            <Col xs={12} md={10}>
              <InputGroup>
              <button className='btn-tbn-block-music'>  </button>
                <Form.Control type='url' value='Songs Title' disabled />
                <InputGroup.Text className='px-1'>
                  <FaPlay style={{ fontSize: "24px", width: "50px" }} />
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col xs={12} md={2}>
              <Button className='btn-light' style={{ width: "100%" }}>
                REMOVE
              </Button>
            </Col>
          </Row>
          </Container> */}
        </div>
    )
}

export default Startmusic
