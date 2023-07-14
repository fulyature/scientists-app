import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { useState } from "react";
import { data } from "../helpers/data";
import ScientistsCard from "./ScientistsCard";

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
        placeholder="Search Scientists..."
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
          {filteredData.map((scientists, i) => (
            <ScientistsCard key={i} {...scientists} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ContainerCard;
