import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { conexion } from "../data/Conection";

export const Create = () => {
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [classrom, setClassrom] = useState("");
  const [duration, setDuration] = useState(0);
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const coursesCollection = collection(conexion, "Cursos");
  const close = () => {
    navigate("/courses");
  };

  const store = async (e) => {
    e.preventDefault();
    await addDoc(coursesCollection, {
      code: code,
      description: description,
      date: date,
      classrom: classrom,
      duration: duration,
      price: price,
      status: status,
    });
    navigate("/courses");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Crear Curso</h1>
          <form onSubmit={store}>
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
              <label className="form-label">Duración</label>
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
              Guardar
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
