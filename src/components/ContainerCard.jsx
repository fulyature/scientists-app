import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { data } from "../helpers/data";

const ContainerCard = () => {
  const [search, setSearch] = useState("");
  const handleClick = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  );
  console.log(filteredData);
  return (
    <>
      <Form.Control
        type="search"
        placeholder="Search Player..."
        onChange={handleClick}
      />
      <Container className="p-3 rounded-3 card-container my-3">
        <Row
          xs={1}
          sm={2}
          md={3}
          lg={4}
          className="justify-content-center g-3 "
        >
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
        </Row>
      </Container>
    </>
  );
};

export default ContainerCard;
