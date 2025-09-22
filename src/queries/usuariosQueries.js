const usuariosQueries = {
  getAll: "SELECT * FROM usuarios",
  getById: "SELECT * FROM usuarios WHERE id = ?",
  getByNombre: "SELECT * FROM usuarios WHERE nombre = ?",
  getByEmail: "SELECT * FROM usuarios WHERE email = ?",
  getByRol: "SELECT * FROM usuarios WHERE rol = ?",
  create: "INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)",
  update: "UPDATE usuarios SET nombre = ?, email = ?, password = ?, rol = ? WHERE id = ?",
  delete: "DELETE FROM usuarios WHERE id = ?",
};

module.exports = usuariosQueries;