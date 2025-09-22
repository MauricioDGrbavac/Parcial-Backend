const db = require('../config/db');
const pedidos_productosQueries = require('../queries/pedidos_productosQueries');

class PedidosProductosController {
    constructor () {}

    consultar(req, res) {
        try{
            db.query(pedidos_productosQueries.getAll,
            (err, rows) => {
                if (err) {
                    res.status(400).send(err);
                }
                res.status(200).json(rows);
                }
            );
        } catch (err) {
            res.status(500).send(err);
        };
    };

    consultarId(req, res) {
        const { id } = req.params;
        try{
            db.query(pedidos_productosQueries.getById, [id],
            (err, rows) => {
                if (err) {
                    res.status(400).send(err);
                }
                res.status(200).json(rows[0]);
                }
            );
        } catch (err) {
            res.status(500).send(err);
        };
    };

    consultarPedido_Id(req, res) {
        const { pedido_id } = req.params;
        try{
            db.query(pedidos_productosQueries.getByPedidoId, [pedido_id],
            (err, rows) => {
                if (err) {
                    res.status(400).send(err);
                }
                res.status(200).json(rows[0]);
                }
            );
        } catch (err) {
            res.status(500).send(err);
        };
    };

    consultarPedidosUsuario(req, res) {
    const { usuario_id } = req.params;
    try {
        db.query(pedidos_productosQueries.getPedidosByUsuarioId, [usuario_id],
            (err, rows) => {
                if (err) return res.status(400).send(err);
                res.status(200).json(rows);
            }
        );
    } catch (err) {
        res.status(500).send(err.message);
    }
    };

    consultarPedidosConTotal(req, res) {
    try {
        db.query(pedidos_productosQueries.getAllPedidosWithTotal,
            (err, rows) => {
                if (err) return res.status(400).send(err);
                res.status(200).json(rows);
            }
        );
    } catch (err) {
        res.status(500).send(err.message);
    }
    };

    consultarProducto_Id(req, res) {
        const { producto_id } = req.params;
        try{
            db.query(pedidos_productosQueries.getByProductoId, [producto_id],
            (err, rows) => {
                if (err) {
                    res.status(400).send(err);
                }
                res.status(200).json(rows[0]);
                }
            );
        } catch (err) {
            res.status(500).send(err);
        };
    };

    consultarCantidad(req, res) {
        const { cantidad } = req.params;
        try{
            db.query(pedidos_productosQueries.getByCant, [cantidad],
            (err, rows) => {
                if (err) {
                    res.status(400).send(err);
                }
                res.status(200).json(rows[0]);
                }
            );
        } catch (err) {
            res.status(500).send(err);
        };
    };

    ingresar(req, res) {
        try {
            const {pedido_id, producto_id, cantidad} = req.body;
            db.query(pedidos_productosQueries.create,
            [pedido_id, producto_id, cantidad],(err, rows) => {
                if (err) {
                    res.status(400).send(err);
                }
                res.status(201).json(rows);
                }
            );
        } catch (err) {
            res.status(500).send(err);
        }
    };

    actualizar(req, res) {
        const { id } = req.params;
        try {
            const {pedido_id, producto_id, cantidad} = req.body;
            db.query(pedidos_productosQueries.update,
                [pedido_id, producto_id, cantidad], (err, rows) => {
                    if (err) {
                       res.status(400).send(err) 
                    }
                    res.status(201).json({rows});
                });
        } catch (err){
            res.status(500).send(err.message);
        };
    }; 

    borrar(req, res) {
        const { id } = req.params;
        try {
            db.query(pedidos_productosQueries.delete,
                [id], (err, rows) => {
                    if (err) {
                       res.status(400).send(err) 
                    }
                    if (rows.affectedRows == 1)
                        res.status(200).json({respuesta: 'Registro eliminado'});
                });
        } catch (err){
            res.status(500).send(err.message);
        };
    };


}

module.exports = new PedidosProductosController();