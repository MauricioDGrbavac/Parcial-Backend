const pedidosQueries = {
    getAll: "SELECT * FROM pedidos_productos",
    getById: "SELECT * FROM pedidos_productos WHERE id = ?",
    getByPedidoId: "SELECT * FROM pedidos_productos WHERE pedido_id = ?",
    getByProductoId: "SELECT * FROM pedidos_productos WHERE producto_id = ?",
    getByCant: "SELECT * FROM pedidos_productos WHERE cantidad = ?",
    create: "INSERT INTO pedidos_productos (pedido_id, producto_id, cantidad) VALUES (?, ?, ?)",
    update: "UPDATE pedidos_productos SET pedido_id = ?, producto_id = ?, cantidad = ? WHERE id = ?",
    delete: "DELETE FROM pedidos_productos WHERE id = ?",
    getPedidosByUsuarioId: `SELECT p.id AS pedido_id, p.fecha, pr.nombre AS producto, dp.cantidad, pr.precio,
                            (dp.cantidad * pr.precio) AS subtotal
                        FROM pedidos p
                        JOIN detalle_pedidos dp ON p.id = dp.pedido_id
                        JOIN productos pr ON dp.producto_id = pr.id
                        WHERE p.usuario_id = 1;`,
    getAllPedidosWithTotal: `SELECT u.nombre, p.id AS pedido_id, p.fecha,
                    SUM(dp.cantidad * pr.precio) AS total
                    FROM pedidos p
                    JOIN usuarios u ON p.usuario_id = u.id
                    JOIN detalle_pedidos dp ON p.id = dp.pedido_id
                    JOIN productos pr ON dp.producto_id = pr.id
                    GROUP BY p.id, u.nombre, p.fecha;`
};

module.exports = pedidosQueries;