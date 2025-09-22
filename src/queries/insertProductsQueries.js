const insertProducts = {
    insert: `INSERT INTO productos (nombre, precio, stock) VALUES

            ('Coca-Cola 500ml', 450.00, 100),
            ('Coca-Cola 1.5L', 900.00, 80),
            ('Coca-Cola 2.25L', 1200.00, 60),
            ('Pepsi 500ml', 420.00, 100),
            ('Pepsi 1.5L', 850.00, 70),
            ('Pepsi 2.25L', 1150.00, 60),
            ('Sprite 500ml', 420.00, 100),
            ('Sprite 1.5L', 850.00, 70),
            ('Fanta 500ml', 420.00, 100),
            ('Fanta 1.5L', 850.00, 70),


            ('Agua Villavicencio 500ml', 300.00, 150),
            ('Agua Villavicencio 1.5L', 600.00, 100),
            ('Agua Eco de los Andes 500ml', 280.00, 150),
            ('Agua Eco de los Andes 1.5L', 580.00, 90),
            ('Levité Pomelo 500ml', 400.00, 120),
            ('Levité Pomelo 1.5L', 750.00, 80),
            ('Cepita Naranja 1L', 650.00, 70),
            ('Cepita Multifruta 1L', 650.00, 70),
            ('Ades Soja Vainilla 1L', 700.00, 60),
            ('Clight Naranja (sobres)', 150.00, 200),


            ('Speed 250ml', 500.00, 100),
            ('Speed 473ml', 750.00, 80),
            ('Monster 500ml', 900.00, 60),
            ('Red Bull 250ml', 850.00, 70),
            ('Red Bull 473ml', 1250.00, 50),


            ('Quilmes Cristal 1L', 1200.00, 90),
            ('Quilmes Cristal 473ml', 650.00, 120),
            ('Stella Artois 1L', 1500.00, 70),
            ('Stella Artois 473ml', 750.00, 90),
            ('Brahma 1L', 1100.00, 70),
            ('Brahma 473ml', 600.00, 80),
            ('Andes Roja 473ml', 700.00, 60),
            ('Andes Rubia 473ml', 700.00, 60),
            ('Corona 330ml', 850.00, 50),
            ('Heineken 1L', 1600.00, 60),
            ('Heineken 473ml', 800.00, 80),


            ('Marlboro Box 20', 2500.00, 50),
            ('Marlboro Gold 20', 2500.00, 50),
            ('Phillip Morris Box 20', 2200.00, 60),
            ('Phillip Morris Classic 20', 2200.00, 60),
            ('Lucky Strike Box 20', 2400.00, 60),
            ('Lucky Strike Red 20', 2400.00, 60),
            ('Camel Box 20', 2600.00, 40),
            ('Pall Mall Blue 20', 2100.00, 50),
            ('Chesterfield 20', 2000.00, 60),
            ('Virginia Slims 20', 2700.00, 40),


            ('Alfajor Havanna', 700.00, 60),
            ('Alfajor Jorgito', 300.00, 150),
            ('Alfajor Guaymallén', 250.00, 200),
            ('Alfajor Cachafaz', 650.00, 50),
            ('Alfajor Capitán del Espacio', 350.00, 100),
            ('Alfajor Fantoche Triple', 400.00, 80),
            ('Alfajor Milka Oreo', 550.00, 70),
            ('Alfajor Tofi Triple', 380.00, 90),
            ('Bon o Bon', 150.00, 250),
            ('Tita', 180.00, 200),


            ('Chocolate Milka 100g', 950.00, 60),
            ('Chocolate Águila 90g', 850.00, 50),
            ('Chocolate Shot', 350.00, 150),
            ('Chocolate Cofler Block 170g', 1200.00, 40),
            ('Chocolate KitKat', 600.00, 80),
            ('Chocolate Toblerone Pequeño', 950.00, 30),
            ('Chocolate Nestlé Classic', 800.00, 60),
            ('Chocolate Kinder Bueno', 750.00, 70),
            ('Kinder Sorpresa', 700.00, 50),
            ('Chocolate Milka Oreo', 950.00, 60),


            ('Rocklets 40g', 450.00, 100),
            ('M&M’s 45g', 600.00, 80),
            ('Sugus (paquete)', 400.00, 120),
            ('Mogul Ositos', 500.00, 100),
            ('Caramelos Media Hora', 350.00, 150),
            ('Chupetín Topolin', 100.00, 300),
            ('Paleta Lipo', 120.00, 250),
            ('Chicles Beldent 5u', 300.00, 200),
            ('Chicles Topline 5u', 300.00, 200),
            ('Halls (paquete)', 350.00, 170),


            ('Papas Lays 50g', 550.00, 90),
            ('Papas Lays 90g', 850.00, 70),
            ('Cheetos 50g', 500.00, 80),
            ('Doritos 90g', 850.00, 70),
            ('3D’s 50g', 480.00, 75),
            ('Maní con chocolate 100g', 600.00, 70),
            ('Maní salado 100g', 350.00, 100),
            ('Galletitas Oreo 118g', 750.00, 90),
            ('Galletitas Pepitos', 800.00, 70),
            ('Galletitas Sonrisas', 700.00, 85),


            ('Criollitas paquete 100g', 500.00, 100),
            ('Bizcochitos Don Satur 200g', 650.00, 120),
            ('Bizcochos Bagley 200g', 700.00, 100),
            ('Tostadas Fargo', 650.00, 80),
            ('Medialunas dulces (unidad)', 250.00, 60),
            ('Factura de crema (unidad)', 300.00, 50),
            ('Pan lactal Bimbo', 1200.00, 40),
            ('Pan Fargo Artesanal', 1350.00, 30),
            ('Turrón Arcor', 250.00, 200),
            ('Galletitas Traviata 200g', 600.00, 70),


            ('Helado Frigor palito bombón', 600.00, 50),
            ('Helado Arcor Tofi', 500.00, 60),
            ('Helado Helados Grido 1/4kg', 2000.00, 40),
            ('Helado Grido 1kg', 5000.00, 20),
            ('Postre Danette chocolate', 650.00, 70),
            ('Postre Serenito', 400.00, 100),
            ('Yogurísimo Frutilla 180g', 450.00, 90),
            ('Yogurísimo Vainilla 180g', 450.00, 90),
            ('Flan Casero 200g', 500.00, 50),
            ('Arroz con leche 200g', 500.00, 50),


            ('Sándwich de miga JyQ (3 triángulos)', 1200.00, 40),
            ('Sándwich de miga JyT (3 triángulos)', 1200.00, 40),
            ('Sándwich de milanesa', 1800.00, 30),
            ('Empanada de carne', 900.00, 60),
            ('Empanada de pollo', 900.00, 60),
            ('Hamburguesa simple', 1500.00, 30),
            ('Hamburguesa completa', 2200.00, 30),
            ('Pizza muzzarella (porción)', 1200.00, 40),
            ('Pizza fugazzeta (porción)', 1400.00, 40),
            ('Pizza napolitana (porción)', 1500.00, 30)
            `
}


module.exports = insertProducts;