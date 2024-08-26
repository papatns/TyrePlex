import React, { useState } from 'react';
import { Card, Button, Row, Col, Container, Form, InputGroup } from './react-bootstrap';
import Tyreimg from '../../assets/Tyre-image.webp'
const TyreCard = ({ tyre }) => (
  <Col sm={3} className="" style={{marginBottom:"20px"}}>
    <Card>
      <Card.Img variant="top" src={tyre.image} style={{width:"100px"}}/>
      <Card.Body>
        <Card.Title>{tyre.name}</Card.Title>
        <Card.Text>
          {tyre.description}
          <br />
          <strong>₹ {tyre.price}</strong>
          <br />
          {tyre.warranty && (
            <span className="badge bg-warning text-dark">
              {tyre.warranty}
            </span>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
);

const TyreList = () => {
  // Sample data for tyres
  const tyres = new Array(30).fill({
    name: "Apollo AMAZER 4G LIFE",
    description: "145/80 R12 Tubeless",
    price: "3,136",
    warranty: "5 Year Warranty",
    image: Tyreimg, // Replace with your image path
  });

  const [visible, setVisible] = useState(4);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle showing more cards
  const showMore = () => {
    setVisible((prevVisible) => prevVisible + 4);
  };

  // Filter tyres based on the search term
  const filteredTyres = tyres.filter(tyre =>
    tyre.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      {/* Header Section */}
      <Row className="my-4">
        <Col>
          <h5 class="text-dark">Tyres sold by this Dealer</h5>
        </Col>
        
      </Row>

      {/* Cards Section */}
      <Row>
        {filteredTyres.slice(0, visible).map((tyre, index) => (
          <TyreCard key={index} tyre={tyre} />
        ))}
      </Row>
      
      {/* View More Button */}
      {visible < filteredTyres.length && (
        <div className="text-center m-4">
          <Button onClick={showMore}>View More</Button>
        </div>
      )}
    </Container>
  );
};

export default TyreList;
