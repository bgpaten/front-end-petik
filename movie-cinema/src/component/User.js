const User = (props) => {
  const { nama, alamat, angkatan, hobies, status, profil, gambar } = props;
  return (
    // fragmen
    <div>
      <h1>Profil {nama}</h1>
      <ul>
        <img src= {gambar} alt="" width={264}/>
        <li>Nama : {nama}</li>
        <li>Alamat : {alamat}</li>
        <li>Angkatan ke-{angkatan}</li>
        <li>Hobi : {hobies.map((hobie) => hobie + ", ")}</li>
        <li>Angkatan : {status ? "Lulus" : "sedang belajar"}</li>
      </ul>
      <button onClick={() => profil(nama)}>Profil</button>
    </div>
  );
};

export default User;
