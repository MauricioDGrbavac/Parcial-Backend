const bcrypt = require("bcryptjs");

const hashedPassword = bcrypt.hashSync("1234", 10);

const insertSAQueries = {
    insert: "INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)",
    values: ["mauricioGrbavac", "mauriciodg@gmail.com", hashedPassword, "superAdmin"]
};

module.exports = insertSAQueries;