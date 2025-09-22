const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosControllers');
const { verificarToken } = require("../middlewares/auth");
const { verificarRol } = require("../middlewares/roles");


router.get('/', verificarToken, verificarRol(["superAdmin", "admin"]), usuariosController.consultar);
router.post('/', verificarToken, verificarRol(["superAdmin"]), usuariosController.ingresar);

router.route('/id/:id')
   .get(verificarToken, verificarRol(["superAdmin" ,"admin"]), usuariosController.consultarId)
   .put(verificarToken, verificarRol(["superAdmin"]), usuariosController.actualizar)
   .delete(verificarToken, verificarRol(["superAdmin"]), usuariosController.borrar);

router.route('/nombre/:nombre')
   .get(verificarToken, verificarRol(["superAdmin" ,"admin"]), usuariosController.consultarNombre)

router.route('/email/:email')
   .get(verificarToken, verificarRol(["superAdmin" ,"admin"]), usuariosController.consultarEmail)

router.route('/rol/:rol')
   .get(verificarToken, verificarRol(["superAdmin" ,"admin"]), usuariosController.consultarRol)


module.exports = router;


