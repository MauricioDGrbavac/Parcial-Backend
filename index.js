const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT

require('./src/config/initdb');


app.use(express.json());

const { verificarToken } = require('./src/middlewares/auth');
app.use(verificarToken);

const pedidosRoutes = require('./src/routes/pedidosRoutes');
app.use('/pedidos', pedidosRoutes);

const productosRoutes = require('./src/routes/productosRoutes');
app.use('/productos', productosRoutes);

const usuariosRoutes = require('./src/routes/usuariosRoutes');
app.use('/usuarios', usuariosRoutes);

const authRoutes = require("./src/routes/authRoutes");
app.use("/auth", authRoutes);

app.listen(PORT, () =>{
    console.log(`Server corriendo en http://localhost:${PORT}`);
});

