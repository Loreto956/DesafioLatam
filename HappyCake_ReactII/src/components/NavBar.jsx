import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar bg="danger" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">
                <Link to='/' 
                      className='text-white m-3 text-decoration-none'>
                    🏠 Home 
                </Link>
            </Nav.Link>
            <Nav.Link href="/contacto">
                <Link to='/contacto'
                      className='text-white ms-3 text-decoration-none'>
                     📒 Contacto 
                </Link>
            </Nav.Link>
          </Nav>
        </Container>
        <div className='tienda'>
                <Navbar.Brand href="/" 
                              className='text-white m-4 text-decoration-none'>
                            Happy Cake 🍰
                </Navbar.Brand>
            </div>
      </Navbar>
    </>
  );
}

export default NavBar;
