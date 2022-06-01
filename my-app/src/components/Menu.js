import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  a, .navbar-nav .nav-link {
    color: #fff;
    opacity: 0.7;
    font-family: Roboto;
    text-decoration: none;
    &:hover {
      color: #fff;
      background: blue;
      opacity: 1;
    }
  }
`
const NavLinkDiv = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
`

function Menu() {
  return (
    <>
      <Styles>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Nav className="me-auto">
              <NavLinkDiv>
                <Link to="/">Все котики</Link>
                <Link to="/FavoriteCats">Любимые котики</Link>
              </NavLinkDiv>
            </Nav>
          </Container>
        </Navbar>
      </Styles>
    </>
  )
};

export default Menu;