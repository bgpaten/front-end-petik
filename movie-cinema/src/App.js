import Header from "./component/Navbar/Navbar";
// import Car from "./component/Car/Car";
import Footer from "./component/Footer/Footer";
import Main from "./component/Main/Main";
// import AddMovieForm from "./component/AddMovieForm/AddMovieForm";
// import imgProfil from "./component/about.jpg"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Popular from "./pages/movie/Popular";
import TopRated from "./pages/movie/TopRated";
import Detail from "./pages/movie/Detail";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top" element={<TopRated />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Footer nama="BgPaten"/>
      </BrowserRouter>
      {/* <Header />
      <Main />
      <Footer nama="BgPaten" /> */}
    </div>
  );
}

// componennt harus huruf kapital di awalnya
// jika return hanya berisi satu tag, maka tidak memerlukan kurung
// const Header = () => {
//   return (
//     <nav>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Login</li>
//       </ul>
//     </nav>
//   );
// };

// cara susah ni
// class Footer extends Component {
//   render() {
//     return (
//       <footer>
//         {/* props atau property agar bisa dipakai dimana-mana */}
//         <h3>Copyright &copy;2024 Developed by {this.props.nama}</h3>
//         <span>Make with &#10084</span>
//       </footer>
//     );
//   }
// }

export default App;
