const user = {
    name : "Budi Santoso",
    age : 20,
    major : "Informatics"
};

// destructing object berdasarkan key
// ngak bisa custome harus sesuai ket
// const {name, age, major} = user;

// manual
// bisa custome
const nama = user.name;
const umur = user.age;
const jurusan = user.major;

console.log(jurusan);