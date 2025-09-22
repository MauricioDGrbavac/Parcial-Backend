const pedidosQueries = {
  getAll: "SELECT * FROM pedidos",
  getById: "SELECT * FROM pedidos WHERE id = ?",
  create: "INSERT INTO pedidos (usuario_id) VALUES (?)",
  update: "UPDATE pedidos SET usuario_id = ? WHERE id = ?",
  delete: "DELETE FROM pedidos WHERE id = ?",
};

module.exports = pedidosQueries;