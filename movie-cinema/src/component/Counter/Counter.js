import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const tambahAngka = () => {
    setNumber(number + 1);
  };

  const kurangAngka = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={tambahAngka}>Tambah</button>
      <button onClick={kurangAngka}>Kurang</button>
    </div>
  );
};

export default Counter;