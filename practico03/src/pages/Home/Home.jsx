import { Header } from "../Header";
import { Footer } from "../Footer";
import "./Home.css";
import { Cards } from "../../components/Cards";
export function Home(props) {
  return (
    <>
      <Header />
      <div className="home">
        <h1 className="styleh1">Home</h1>
        <h1 className="styleh1">
          {props.name ? `Bienvenido - ${props.name}` : "Inicie sesión"}
        </h1>
        <Cards />
      </div>
      <Footer />
    </>
  );
}
