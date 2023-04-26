import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Courses } from "../pages/Course/Courses";
import { Login } from "../pages/Login/Login";
import { Signup } from "../pages/Login/Signup";
import { Home } from "../pages/Home/Home";
import { Create } from "../components/CreateCourse";
import { Edit } from "../components/EditCourse";
import { auth } from "../data/Conection";
import { useState } from "react";
import { useEffect } from "react";

export function MyRoutes() {
  const [userName, setUserName] = useState([]);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home name={userName} />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}
