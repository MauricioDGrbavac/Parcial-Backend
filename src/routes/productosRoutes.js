const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosControllers');
const { verificarToken } = require("../middlewares/auth");
const { verificarRol } = require("../middlewares/roles");

router.get('/', verificarToken, verificarRol(["superAdmin", "admin", "user"]), productosController.consultar);
router.post('/', verificarToken, verificarRol(["superAdmin", "admin"]), productosController.ingresar);

router.route('/:id')
   .get(verificarToken, verificarRol(["superAdmin" ,"admin"]), productosController.consultarId)
   .put(verificarToken, verificarRol(["superAdmin", "admin"]), productosController.actualizar)
   .delete(verificarToken, verificarRol(["superAdmin", "admin"]), productosController.borrar);

router.route('/nombre/:nombre')
   .get(verificarToken, verificarRol(["superAdmin" ,"admin", "user"]), productosController.consultarNombre)

router.route('/precio/:precio')
   .get(verificarToken, verificarRol(["superAdmin" ,"admin", "user"]), productosController.consultarPrecio)

router.route('/stock/:stock')
   .get(verificarToken, verificarRol(["superAdmin" ,"admin"]), productosController.consultarStock)


module.exports = router;

