const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosControllers');
const { verificarToken } = require("../middlewares/auth");
const { verificarRol } = require("../middlewares/roles");


router.get('/', verificarToken, verificarRol(["superAdmin", "admin"]), pedidosController.consultar);
router.post('/', verificarToken, verificarRol(["user"]), pedidosController.ingresar);


router.route('/:id')
   .get(verificarToken, verificarRol(["superAdmin", "admin"]), pedidosController.consultarId)
   .put(verificarToken, verificarRol(["superAdmin"]), pedidosController.actualizar)
   .delete(verificarToken, verificarRol(["superAdmin"]), pedidosController.borrar);

module.exports = router;