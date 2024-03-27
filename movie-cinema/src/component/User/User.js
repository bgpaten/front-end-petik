import "./User.css";

const User = (props) => {
  const {
    nama,
    // alamat,
    // angkatan,
    // hobies,
    // status,
    message,
    member,
    id,
    // gambar
  } = props;

  // const tableStyle = {
  //   border: "1px solid black",
  //   width: "300px",
  //   margin: "20px auto",
  // };

  // const headerStyle = { textAlign: "center", fontWeight: "bold" };

  // const cellStyle = { textAlign: "center" };
  return (
    // fragmen
    // <div>

    //   <ul>
    //     <img src= {gambar} alt="" width={264}/>
    //     <li>Nama : {nama}</li>
    //     <li>Alamat : {alamat}</li>
    //     <li>Angkatan ke-{angkatan}</li>
    //     <li>Hobi : {hobies.map((hobie) => hobie + ", ")}</li>
    //     <li>Angkatan : {status ? "Lulus" : "sedang belajar"}</li>
    //   </ul>
    //   <button onClick={() => profil(nama)}>Profil</button>
    // </div>
    <div>
      <table className="card">
        <thead className="card-head">
          <tr>
            <td colSpan={2}>{nama}</td>
          </tr>
        </thead>
        <tbody className="card-body">
          <tr>
            <td colSpan={2}>{member}</td>
          </tr>
          <tr>{id}</tr>
          <tr>
            <td>
              <button onClick={message}>Message</button>
            </td>
            <td>
              <button>Subscribe</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
