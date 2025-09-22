const express = require('express');
const router = express.Router();
const pedidosProductosController = require('../controllers/pedidos_productosControllers');
const { verificarToken } = require("../middlewares/auth");
const { verificarRol } = require("../middlewares/roles");

router.get('/', verificarToken, verificarRol(["superAdmin", "admin"]), pedidosProductosController.consultar);
router.post('/', verificarToken, verificarRol(["user"]), pedidosProductosController.ingresar);

router.route('/:id')
   .get(verificarToken, verificarRol(["superAdmin", "admin"]), pedidosProductosController.consultarId)
   .put(verificarToken, verificarRol(["superAdmin"]), pedidosProductosController.actualizar)
   .delete(verificarToken, verificarRol(["superAdmin"]), pedidosProductosController.borrar)

router.route('/pedido_id/:pedido_id')
   .get(verificarToken, verificarRol(["superAdmin" ,"admin", "user"]), pedidosProductosController.consultarPedidoId);

router.route('/producto_id/:producto_id')
   .get(verificarToken, verificarRol(["superAdmin" ,"admin", "user"]), pedidosProductosController.consultarProducto_Id);

router.route('/cantidad/:cantidad')
   .get(verificarToken, verificarRol(["superAdmin" ,"admin"]), pedidosProductosController.consultarCantidad);

router.route('/usuario/:usuario_id') 
   .get(verificarToken, verificarRol(["superAdmin", "admin", "user"]), pedidosProductosController.consultarPedidosUsuario);

router.route('/totales')
   .get(verificarToken, verificarRol(["superAdmin", "admin"]), pedidosProductosController.consultarPedidosConTotal);


module.exports = router;