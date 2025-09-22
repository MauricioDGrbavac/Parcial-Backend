const verificarRol = (rolesPermitidos) => {
  return (req, res, next) => {
    if (!rolesPermitidos.includes(req.user.rol)) {
      return res.status(403).json({ message: "No tienes permiso para esta acción" });
    }
    next();
  };
};

module.exports = { verificarRol };