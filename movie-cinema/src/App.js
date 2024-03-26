import Header from "./component/Navbar/Navbar";
import Car from "./component/Car/Car";
import Footer from "./component/Footer/Footer";
import Main from "./component/Main/Main";
// import imgProfil from "./component/about.jpg"

function App() {
  return (
    <div className="container">
      <Header />
      <h1>Hello World</h1>
      <Main/>
      <Footer nama="BgPaten" />
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
