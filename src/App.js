import { Container } from "react-bootstrap";

import Header from "./components/Header";
import ContainerCard from "./components/ContainerCard";

const App = () => {
  return (
    <div>
      <Container className="text-center mt-5">
        <Header />
        <ContainerCard />
      </Container>
    </div>
  );
};

export default App;
