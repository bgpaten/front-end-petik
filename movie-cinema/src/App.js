import { Component } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum velit eos
        exercitationem culpa modi fugit ullam illo eveniet laboriosam dolorem
        facere tempore, nostrum a aliquid? Dolorem nesciunt praesentium rerum
        repellat.
      </p>
      <Footer></Footer>
    </div>
  );
}

// componennt harus huruf kapital di awalnya
// jika return hanya berisi satu tag, maka tidak memerlukan kurung
const Header = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

// cara susah ni
class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>Copyright &copy;2024 Developed by BgPaten</h3>
        <span>Make with &#10084</span>
      </footer>
    );
  }
}

export default App;
