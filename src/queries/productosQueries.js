const productosQueries = {
  getAll: "SELECT * FROM productos",
  getById: "SELECT * FROM productos WHERE id = ?",
  getByNombre: "SELECT * FROM productos WHERE nombre LIKE ?",
  getByPrecio: "SELECT * FROM productos WHERE precio LIKE ?",
  getByStock: "SELECT * FROM productos WHERE stock LIKE ?",
  create: "INSERT INTO productos (nombre, precio, stock) VALUES (?, ?, ?)",
  update: "UPDATE productos SET nombre = ?, precio = ?, stock = ? WHERE id = ?",
  delete: "DELETE FROM productos WHERE id = ?",
};

module.exports = productosQueries;