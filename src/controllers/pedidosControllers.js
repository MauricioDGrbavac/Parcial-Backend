const db = require('../config/db');
const pedidosQueries = require('../queries/pedidosQueries');

class PedidosController {
    constructor () {}

    consultar(req, res) {
        try{
            db.query(pedidosQueries.getAll,
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
            db.query(pedidosQueries.getById, [id],
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
            const {usuario_id} = req.body;
            db.query(pedidosQueries.create,
            [usuario_id],(err, rows) => {
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
            const {usuario_id} = req.body;
            db.query(pedidosQueries.update,
                [usuario_id], (err, rows) => {
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
            db.query(pedidosQueries.delete,
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

module.exports = new PedidosController();