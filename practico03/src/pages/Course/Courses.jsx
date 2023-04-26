import { Header } from "../Header";
import { Footer } from "../Footer";
import { Show } from "../../components/ShowCourse";
import "./Courses.css";
export function Courses() {
  return (
    <>
      <Header />
      <h1 className="styleh1">Cursos</h1>
      <Show />
      <Footer />
    </>
  );
}
