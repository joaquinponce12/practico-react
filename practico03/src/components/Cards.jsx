import { Card } from "./Card";
import { useState, useEffect } from "react";

import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { conexion } from "../data/Conection";

export function Cards() {
  const [courses, setCourses] = useState([]);

  const coursesCollection = collection(conexion, "Cursos");

  const getCourses = async () => {
    const data = await getDocs(coursesCollection);
    setCourses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getCourses();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {courses.map(({ code, description, price, status, id }) => (
          <div className="col-md-4" key={id}>
            <Card
              code={code}
              description={description}
              price={price}
              status={status}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
