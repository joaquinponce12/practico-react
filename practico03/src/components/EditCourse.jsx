import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { conexion } from "../data/Conection";

export const Edit = () => {
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [classrom, setClassrom] = useState("");
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const course = doc(conexion, "Cursos", id);
    const data = {
      code: code,
      description: description,
      date: date,
      classrom: classrom,
      duration: duration,
      price: price,
      status: status,
    };
    await updateDoc(course, data);
    navigate("/courses");
  };
  const close = () => {
    navigate("/courses");
  };

  const getProductById = async (id) => {
    const course = await getDoc(doc(conexion, "Cursos", id));
    if (course.exists()) {
      setCode(course.data().code);
      setDescription(course.data().description);
      setDate(course.data().date);
      setClassrom(course.data().classrom);
      setDuration(course.data().duration);
      setPrice(course.data().price);
      setStatus(course.data().status);
    } else {
      console.log("El curso no existe");
    }
  };

  useEffect(() => {
    getProductById(id);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Editar Curso</h1>
          <form onSubmit={update}>
            <div className="mb-3">
              <label className="form-label">Codigo</label>
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Descripcion</label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Fecha</label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Aula</label>
              <input
                value={classrom}
                onChange={(e) => setClassrom(e.target.value)}
                type="number"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Duracion</label>
              <input
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                type="number"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Precio</label>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Estado</label>
              <input
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
            <button onClick={close} className="btn btn-secondary">
              Cancelar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
