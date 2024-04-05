import React from "react";
import TableComponent from "../component/Table";
import NavbarComponent from "../component/Navbar";

function TopRated() {
  return (
    <div>
      <NavbarComponent />
      <h1>Top Rated</h1>
      <TableComponent />
    </div>
  );
}

export default TopRated;
