import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react";

const ScientistsCard = ({ name, img, info }) => {
  const [showImage, setShowImage] = useState(true);
  return (
    <Col>
      <Card
        onClick={() => setShowImage(!showImage)}
        role="button"
        className="scientist-card"
      >
        {/* toggle la varsa true yoksa false yapıyo */}
        {showImage ? (
          <Card.Img
            variant="top"
            src={img}
            height="180px"
            // onClick={() => setShowImage(false)}
          />
        ) : (
          <ul
            className="m-auto"
            //   onClick={() => setShowImage(true)}
          >
            {info.map((item, i) => (
              <li clasName="h5 text-sart list-unstyled " key={i}>
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
