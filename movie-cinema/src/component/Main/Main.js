import User from "../User/User.js";
import Car from "../Car/Car.js";
import "./Main.css";

const Main = () => {
  return (
    <div class="content">
      <User nama="Asep" member="Gold" />
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
      />
    </div>
  );
};

export default Main;
