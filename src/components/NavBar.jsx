import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import portfolioLogo from '../assets/images/logo.png';

export const NavBar = () => {
    return (
        <>
            <Navbar expand="large" bg="light" data-bs-theme="light">
                <Container>
                <Navbar.Brand href="#home">
                    {/* Navbar <img src={portfolioLogo} alt='Portfolio Logo' /> */}
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About me</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar