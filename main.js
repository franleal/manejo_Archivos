const Contenedor = require("./index");

const productos = new Contenedor("./productos.json");

productos.save({ title: "algo", price: 150 });
productos.getById(2);
productos.getAll();
productos.deleteById(4);
productos.deleteAll(); 