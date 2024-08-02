import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { handleLogoutBack } from '../../../action/user';

function BackNavbar() {
  const dispatch = useDispatch();
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container className="bg-body-tertiary m-0 ps-4 pe-4 min-vw-100 justify-content-end">
        <Navbar.Brand href="/admin">[Les Toqués] Espace orga</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav b-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto bg-body-tertiary p-4">
            <Nav.Link href="/admin/validation">Validation</Nav.Link>
            <NavDropdown title="Listes" id="basic-nav-dropdown">
              <Nav.Link href="/admin/users">Utilisateurs</Nav.Link>
              <Nav.Link href="/admin/foodtrucks">Foodtrucks</Nav.Link>
              <Nav.Link href="/admin/animations">Animations</Nav.Link>
              <Nav.Link href="/admin/partners">Partenaires</Nav.Link>
              <Nav.Link href="/admin/categories">Catégories</Nav.Link>
              <Nav.Link href="/admin/tags">Tags</Nav.Link>
            </NavDropdown>
            <Button
              onClick={() => {
                dispatch(handleLogoutBack());
              }}
              variant="light"
            >
              Déconnexion
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BackNavbar;
