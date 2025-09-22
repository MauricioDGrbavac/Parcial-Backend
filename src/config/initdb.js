const db = require('./db');
const createDbQueries = require('../queries/createDbQueries');
const useDbQueries = require("../queries/useDbQueries");
const createTablesQueries = require("../queries/createTablesQueries");
const insertSuperAdmin = require("../queries/insertSuperAdminQueries");
const insertProducts = require("../queries/insertProductsQueries");


function createDb() {
    try{
        db.query(createDbQueries.create, (err) => {
            if(err){
                console.error("Error al crear la base de datos:", err.message);
                return;
            }
            console.log("Base de datos creada / vericada correctamente");
    });
    } catch(error){
        console.error("Error:", error.message);
    }
};

function useDb() {
    try{
        db.query(useDbQueries.use, (err) => {
            if(err){
                console.error("Error al usar la base de datos:", err.message);
                return;
            }
            console.log("Base de datos en ejecución");
    });
    } catch(error){
        console.error("Error:", error.message);
    }
};

function createTableUsuarios() {
    try{
        db.query(createTablesQueries.usuarios, (err) => {
            if(err){
                console.error("Error al crear la tabla usuarios:", err.message);
                return;
            }
            console.log("Tabla usuarios creada con éxtito");
    });
    } catch(error){
        console.error("Error:", error.message);
    }
};

function createTableProductos() {
    try{
        db.query(createTablesQueries.productos, (err) => {
            if(err){
                console.error("Error al crear la tabla productos:", err.message);
                return;
            }
            console.log("Tabla productos creada con éxtito");
    });
    } catch(error){
        console.error("Error:", error.message);
    }
};

function createTablePedidos() {
    try{
        db.query(createTablesQueries.pedidos, (err) => {
            if(err){
                console.error("Error al crear la tabla pedidos:", err.message);
                return;
            }
            console.log("Tabla pedidos creada con éxtito");
    });
    } catch(error){
        console.error("Error:", error.message);
    }
};

function createTablePedidosProductos() {
    try{
        db.query(createTablesQueries.pedidos_productos, (err) => {
            if(err){
                console.error("Error al crear la tabla pedidos/productos:", err.message);
                return;
            }
            console.log("Tabla pedidos/productos creada con éxtito");
    });
    } catch(error){
        console.error("Error:", error.message);
    }
};

function insertarSuperAdmin() {
    try{
        db.query(insertSuperAdmin.insert, insertSuperAdmin.values, (err) => {
            if(err){
                console.error("No se pudo ingresar el super Admin:", err.message);
                return;
            }
            console.log("Super Admin ingresado con éxito");
    });
    } catch(error){
        console.error("Error:", error.message);
    };
};

function insertarProductos() {
    try {
        db.query("SELECT COUNT(*) AS total FROM productos", (err, rows) => {
            if (err) return console.error("Error verificando productos:", err.message);

            if (rows[0].total === 0) {
                db.query(insertProducts.insert, (err) => {
                    if (err) {
                        console.error("No se pudo ingresar los productos:", err.message);
                        return;
                    }
                    console.log("Productos iniciales ingresados con éxito");
                });
            } else {
                console.log("La tabla productos ya tiene datos, no se insertaron iniciales");
            }
        });
    } catch (error) {
        console.error("Error:", error.message);
    }
}

createDb();
useDb();
createTableUsuarios();
createTableProductos();
createTablePedidos();
createTablePedidosProductos();
insertarSuperAdmin();
insertarProductos();