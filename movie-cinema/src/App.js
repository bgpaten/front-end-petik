import Header from "./component/Header";
import Car from "./component/Car";
import User from "./component/User";
import Footer from "./component/Footer";
import imgProfil from "./component/about.jpg"

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello World</h1>
      <User
        gambar="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        nama="Asep"
        alamat="Jaksel"
        angkatan={11}
        hobies={["Badminton", "Futsal", "Tenis Meja"]}
        status={false}
        profil={(nama) => alert("Profil " + nama + " telah dibuka")}
      />
      <User
        gambar={imgProfil}
        nama="Samsul"
        alamat="Jaksel"
        angkatan={11}
        hobies={["Badminton", "Futsal", "Tenis Meja"]}
        status={true}
        profil={(nama) => alert("Profil " + nama + " telah dibuka")}
      />
      <Car
        merk="Dodge"
        harga={5}
        isNew={true}
        colors={["Hitam", "Putih", "abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      />
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
