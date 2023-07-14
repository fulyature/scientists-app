import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react";

const ScientistsCard = ({ name, img, info }) => {
  const [showImage, setShowImage] = useState(true);
  return (
    <Col>
      <Card>
        {showImage ? (
          <Card.Img variant="top" src={img} height="200px" />
        ) : (
          <ul>
            {info.map((item, i) => (
              <li clasName="h5 text-sart" key={i}>
                {item}
              </li>
            ))}
          </ul>
        )}
        <Card.Footer>
          <Card.Title>{name}</Card.Title>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ScientistsCard;
