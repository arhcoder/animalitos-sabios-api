// Librerías necesarias...
const express = require("express");
const bodyparser = require("body-parser");
let { getMichi } = require("./michi.js");
let { getLomito } = require("./lomito.js");
let { getAjolotito } = require("./ajolotito.js");

// Creando una instancia de express como app...
var app = express();
app.use(bodyparser.json());

// Abriendo a la escucha de peticiones el puerto 80 de la app...
const PORT = 3000
app.listen(PORT, () => console.log("Escuchando peticiones en https://localhost:"+PORT+"/"));

// FUNCIONES GET:
// Obtener datos de michito:
app.get("/hola", async(request, response) =>
{
    response.send("Hola");
});

// Obtener datos de michito:
app.get("/michi", async(request, response) =>
{
    // Permite peticiones de cualquier origen:
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", true);

    // Envía como respuesta los datos del michito:
    response.send(await getMichi());
});
// Obtener datos de lomito:
app.get("/lomito", async(request, response) =>
{
    // Permite peticiones de cualquier origen:
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", true);

    // Envía como respuesta los datos del lomito:
    response.send(await getLomito());
});
// Obtener datos de ajolotito:
app.get("/ajolotito", async(request, response) =>
{
    // Permite peticiones de cualquier origen:
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", true);

    // Envía como respuesta los datos del ajolotito:
    response.send(await getAjolotito());
});