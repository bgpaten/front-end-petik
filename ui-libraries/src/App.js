import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Detail from "./pages/Detail";
import Dashboard from "./pages/Dashboard";
import DetailCourse from "./pages/DetailCourse";
import AddCourse from "./component/course/AddCourse";
import TableCourse from "./component/course/TableCourse";
import NotFound from "./component/NotFound";
import EditCourse from "./component/course/EditCourse";

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
          <Route path="/table-course" element={<TableCourse />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course/add" element={<AddCourse />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/course/edit/:id" element={<EditCourse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
