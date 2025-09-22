const db = require('../config/db');
const bcrypt = require('bcryptjs');
const usuariosQueries = require('../queries/usuariosQueries');

class UsuariosController {
    constructor () {}

    consultar(req, res) {
        try{
            db.query(usuariosQueries.getAll,
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
            db.query(usuariosQueries.getById, [id],
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
        const { nombre } = req.params;
        try{
            db.query(usuariosQueries.getByNombre, [nombre],
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

    consultarEmail(req, res) {
        const { email } = req.params;
        try{
            db.query(usuariosQueries.getByEmail, [email],
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

    consultarRol(req, res) {
        const { rol } = req.params;
        try{
            db.query(usuariosQueries.getByRol, [rol],
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
        const { nombre, email, password, rol } = req.body;

        const hashedPassword = bcrypt.hashSync(password, 10);

        db.query(
            usuariosQueries.create,
            [nombre, email, hashedPassword, rol || "user"],
            (err, result) => {
                if (err) {
                    return res.status(400).json({ error: err.message });
                }

                res.status(201).json({
                    message: "Usuario registrado con éxito",
                    id: result.insertId
                });
            }
        );
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };

    actualizar(req, res) {
        const { id } = req.params;
        const {nombre, email, password, rol} = req.body;
        try {
            const hashedPassword = bcrypt.hashSync(password, 10);
            db.query(usuariosQueries.update,
                [nombre, email, hashedPassword, rol, id], (err, rows) => {
                    if (err) {
                       res.status(400).send(err) 
                    }
                    res.status(201).json({message: "Usuario actualizado", rows });
                });
        } catch (err){
            res.status(500).send(err.message);
        };
    }; 

    borrar(req, res) {
        const { id } = req.params;
        try {
            db.query(usuariosQueries.delete,
                [id], (err, rows) => {
                    if (err) {
                       res.status(400).send(err) 
                    };
                    if (rows.affectedRows == 1) {
                        res.status(200).json({respuesta: 'Registro eliminado'});
                    }else{
                        res.status(404).json({ message: "Usuario no encontrado" });
                    }
                        
                });
        } catch (err){
            res.status(500).send(err.message);
        };
    };
}

module.exports = new UsuariosController();