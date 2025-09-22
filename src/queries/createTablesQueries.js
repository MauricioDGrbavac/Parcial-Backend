const createTablesQueries = {
    usuarios: `CREATE TABLE IF NOT EXISTS usuarios (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(100) UNIQUE NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      rol ENUM('superAdmin','admin','user') DEFAULT 'user'
    )`,
    
    productos: `CREATE TABLE IF NOT EXISTS productos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(100) UNIQUE NOT NULL,
      precio DECIMAL(10,2) NOT NULL,
      stock INT NOT NULL
    )`,
    
    pedidos: `CREATE TABLE IF NOT EXISTS pedidos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      usuario_id INT,
      fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    )`,

    pedidos_productos: `
    CREATE TABLE IF NOT EXISTS pedido_producto (
      id INT AUTO_INCREMENT PRIMARY KEY,
      pedido_id INT,
      producto_id INT,
      cantidad INT NOT NULL,
      FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
      FOREIGN KEY (producto_id) REFERENCES productos(id)
    )`
};

module.exports = createTablesQueries;