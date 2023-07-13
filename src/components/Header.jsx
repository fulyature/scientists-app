import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import logo from "../assets/Science-Logo.png";

const Header = () => {
  return (
    <Container>
      <Image src={logo} alt="" width="300px" />
      <h1 className="my-2">Scientists who shape the future</h1>
    </Container>
  );
};

export default Header;
