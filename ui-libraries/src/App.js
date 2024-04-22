import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Detail from "./pages/Detail";
import Dashboard from "./pages/Dashboard";
import DetailCourse from "./component/DetailCourse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/detailcourse/:id" element={<DetailCourse />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
