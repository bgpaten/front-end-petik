import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        {/* props atau property agar bisa dipakai dimana-mana */}
        <h3>Copyright &copy;2024 Developed by {this.props.nama}</h3>
        <span>Make with &#10084</span>
      </footer>
    );
  }
}

export default Footer;
