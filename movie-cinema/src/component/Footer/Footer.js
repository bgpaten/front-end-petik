import { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        {/* props atau property agar bisa dipakai dimana-mana */}
        <h3>Copyright &copy;2024 Developed by {this.props.nama}</h3>
        <span>Make with &#10084</span>
      </footer>
    );
  }
}

export default Footer;
