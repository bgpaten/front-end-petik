import Sequelize from "sequelize";

const db = new Sequelize("auth_db", "ahyar", "bismillah1", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
