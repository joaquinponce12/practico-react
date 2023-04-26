import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
const MySwal = withReactContent(Swal);

export function Header() {
  const navigate = useNavigate();
  const confirmDelete = (id) => {
    MySwal.fire({
      title: "¿Desea Cerrar Sesion?",
      text: "Panel de Confirmacion",
      icon: "Advertencia",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "si, aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        //llamamos a la fcion para eliminar
        navigate("/");
      }
    });
  };

  return (
    <>
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">
            <img
              src="https://www.upds.edu.bo/wp-content/uploads/2020/10/upds_logo_300.jpg" // reemplaza esta URL con la URL de tu propio logotipo
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto align-items-center">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/courses">
                Cursos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link onClick={confirmDelete}>Cerrar Sesión</Nav.Link>
          </Nav>
        </Navbar>
      </header>
    </>
  );
}
