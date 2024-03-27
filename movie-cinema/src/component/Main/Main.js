import User from "../User/User.js";
// import Car from "../Car/Car.js";
import Movies from "../Movies/Movies";
import Hero from "../Hero/Hero";
import "./Main.css";

const Main = () => {
  const users = [
    {
      nama: "Samsul",
      member: "Gold",
      message: "Santai!",
    },
    {
      nama: "Asep",
      member: "Platinum",
      message: "Stay coll",
    },
    {
      nama: "Ajo",
      member: "Diamond",
      message: "Tenang aja",
    },
    {
      nama: "Joko",
      member: "No Member",
      message: "Asyhadu",
    },
    {
      nama: "Ari",
      member: "Gold",
      message: "Banzai!",
    },
    {
      nama: "Ryhn",
      member: "Platinum",
      messsage: "Tetap Semangat",
    },
    {
      nama: "Dodo",
      member: "Gold",
      message: "Untuk Aktifitas Hari ini",
    },
    {
      nama: "Putra",
      member: "Diamond",
      message: "BTC",
    },
    {
      nama: "Daus",
      member: "Gold",
      messagee: "Suroboyo cuk",
    },
    {
      nama: "Samsul",
      member: "Gold",
      message: "Puertorico"
    },
  ];
  return (
    <div className="content">
      <Hero />
      <Movies />
      {users.map((user, index) => {
        return (
          <User
            nama={user.nama}
            member={user.member}
            id={index}
            message={() => alert(user.message)}
          />
        );
      })}
      {/* <User nama="Asep" member="Gold" />
      <User nama="Samsul" member="Platinum" />
      <User nama="Ucup" member="Silver" />
      <User nama="Ajo" member="Gold" />
      <User nama="Budi" member="Non Member" />
      <User nama="Zainul" member="Diamond" />
      <User nama="Tamus" member="Silver" />
      <User nama="Aldos" member="Diamond" />
      <User nama="Ucoep" member="Gold" />
      <User nama="suuuu" member="Platinum" />
      
      <Car
        merk="Dodge Challanger Cathall"
        harga={500000}
        isNew={true}
        colors={["Hitam", "Putih", "abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      />
       <Car
        merk="Dodge Challanger Cathall"
        harga={500000}
        isNew={true}
        colors={["Hitam", "Putih", "abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      />
       <Car
        merk="Dodge Challanger Cathall"
        harga={500000}
        isNew={true}
        colors={["Hitam", "Putih", "abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      />
       <Car
        merk="Dodge Challanger Cathall"
        harga={500000}
        isNew={true}
        colors={["Hitam", "Putih", "abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      />
       <Car
        merk="Dodge Challanger Cathall"
        harga={500000}
        isNew={true}
        colors={["Hitam", "Putih", "abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      />
       <Car
        merk="Dodge Challanger Cathall"
        harga={500000}
        isNew={true}
        colors={["Hitam", "Putih", "abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      />
      <Car
        merk="Dodge Challanger Cathall"
        harga={500000}
        isNew={true}
        colors={["Hitam", "Putih", "abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      />
      <Car
        merk="Dodge Challanger Cathall"
        harga={500000}
        isNew={true}
        colors={["Hitam", "Putih", "abu-abu"]}
        beli={() => alert("Sudah dibeli")}
      /> */}
    </div>
  );
};

export default Main;
