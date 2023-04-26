import { InputControl } from "./InputControl";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../data/Conection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import "./Login.css";
export function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const Iniciar = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Datos incompletos o credenciales incorrectas");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <>
      <div className="loginsignup">
        <img
          src="https://images.vexels.com/media/users/3/136535/isolated/preview/393a7d8e436bccc3aedfd43865b48890-candado.png"
          alt="imagen"
          className="styleimg"
        />
        <h1>Login</h1>
        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Ingrese su correo"
        />
        <InputControl
          label="Contraseña"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Ingrese su contraseña"
        />

        <div>
          <b>{errorMsg}</b>
          <br />
          <button onClick={Iniciar}>Ingresar</button>
          <p>
            No tienes una cuenta?
            <span>
              <Link to="/signup"> Crear Cuenta</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
