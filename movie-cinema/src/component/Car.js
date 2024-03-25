const Car = (props) => {
  const { merk, harga, isNew, colors, beli } = props;
  return (
    // fragmen
    <>
      <img
        src="data:image/jpeg;base64,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BERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/Z"
        alt="foto-mobil"
        width={264}
      />
      <h3>Merk Mobil : {merk}</h3>
      <h4>Harga Mobil : Rp {harga} M</h4>
      <h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"}</h5>
      <h5>Varian Warna : {colors.map((color) => color + ", ")}</h5>
      <button onClick={beli}>Beli</button>
    </>
  );
};

export default Car;