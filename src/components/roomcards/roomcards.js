import React from "react";
import { Card,Button } from "react-bootstrap";
import "./roomcards.css";

const Roomcards = () => {
  return (
    <div className="cards">
      <Card className="Card1">
        <Card.Body>
          <Card.Title>
            <b>Create Room</b>
          </Card.Title>
          <Card.Text>
            Play alng with
            <br />
            your friends
          </Card.Text>
          {/* TODO : Add Arrow Pic */}
          <Card.Link> </Card.Link>  
        </Card.Body>
      </Card>

      <Card className="Card1">
        <Card.Body>
          <Card.Title>
            <b>Join Room</b>
          </Card.Title>
          <Card.Text>
            Play along with
            <br />
            your friends
          </Card.Text>
          <Card.Link>Click here</Card.Link>
        </Card.Body>
      </Card>
      {/* <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default Roomcards;
