import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { conexion } from "../data/Conection";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { async } from "@firebase/util";
const MySwal = withReactContent(Swal);

export const Show = () => {
  const [courses, setCourses] = useState([]);

  const coursesCollection = collection(conexion, "Cursos");

  const getCourses = async () => {
    const data = await getDocs(coursesCollection);
    setCourses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  //4 - Funcion para eliminar un doc
  const deleteCourse = async (id) => {
    const courseDoc = doc(conexion, "Cursos", id);
    await deleteDoc(courseDoc);
    getCourses();
  };
  //5 - Funcion de confirmacion para Sweet Alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: "¿Eliminar el Curso?",
      text: "Panel de Confirmacion",
      icon: "Advertencia",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "si, aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        //llamamos a la fcion para eliminar
        deleteCourse(id);
        Swal.fire("Eliminando!", "El curso a sido eliminado", "exitoso");
      }
    });
  };
  //6 - usamos useEffect
  useEffect(() => {
    getCourses();
    // eslint-disable-next-line
  }, []);
  //7 - devolvemos vista de nuestro componente
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2">
              <Link to="/create" className="btn btn-secondary mt-2 mb-2">
                Create
              </Link>
            </div>
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th>Codigo</th>
                  <th>Descripcion</th>
                  <th>fecha</th>
                  <th>aula</th>
                  <th>duracion</th>
                  <th>precio</th>
                  <th>estado</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.code}</td>
                    <td>{course.description}</td>
                    <td>{course.date}</td>
                    <td>{course.classrom}</td>
                    <td>{course.duration}</td>
                    <td>{course.price}</td>
                    <td>{course.status}</td>
                    <td>
                      <Link to={`/edit/${course.id}`} className="btn btn-light">
                        <i className="fa-solid fa-pencil">Editar</i>
                      </Link>
                      <button
                        onClick={() => {
                          confirmDelete(course.id);
                        }}
                        className="btn btn-danger"
                      >
                        <i className="fa-solid fa-trash">Eliminar</i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
