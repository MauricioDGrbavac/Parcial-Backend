const db = require('../config/db');
const productosQueries = require('../queries/productosQueries');

class ProductosController {
    constructor () {}

    consultar(req, res) {
        try{
            db.query(productosQueries.getAll,
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
            db.query(productosQueries.getById, [id],
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

    consultarNombre(req, res) {
        const nombre = req.params.nombre;
        const searchPattern = '%' + nombre + '%';
        try{
            db.query(productosQueries.getByNombre, [searchPattern],
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

    consultarPrecio(req, res) {
        const { precio } = req.params.precio;
        const searchPattern = '%' + precio + '%';
        try{
            db.query(productosQueries.getByPrecio, [searchPattern],
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

    consultarStock(req, res) {
        const { stock } = req.params.stock;
        const searchPattern = '%' + stock + '%';
        try{
            db.query(productosQueries.getByStock, [searchPattern],
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

    ingresar(req, res) {
        try {
            const {nombre, precio, stock} = req.body;
            db.query(productosQueries.create,
            [nombre, precio, stock],(err, rows) => {
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
            const {nombre, precio, stock} = req.body;
            db.query(productosQueries.update,
                [nombre, precio, stock], (err, rows) => {
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
            db.query(productosQueries.delete,
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

module.exports = new ProductosController();