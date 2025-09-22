const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const usuariosQueries = require("../queries/usuariosQueries");

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

// Registro seguro
const register = (req, res) => {
    const { nombre, email, password, rol } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    db.query(
        usuariosQueries.create,
        [nombre, email, hashedPassword, rol || "user"],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: "Usuario registrado", id: result.insertId });
        }
    );
};

// Login seguro
const login = (req, res) => {
    const { nombre, password } = req.body;

    db.query(usuariosQueries.getByNombre, [nombre], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        if (rows.length === 0) return res.status(401).json({ message: "Usuario no encontrado" });

        const usuario = rows[0];
        const valid = bcrypt.compareSync(password, usuario.password);
        if (!valid) return res.status(401).json({ message: "Contraseña incorrecta" });

        const token = jwt.sign(
            { id: usuario.id, rol: usuario.rol },
            JWT_SECRET,
            { expiresIn: JWT_EXPIRES_IN }
        );

        res.json({ message: "Login exitoso", token });
    });
};

module.exports = { register, login };