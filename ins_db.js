const fs = require("fs");

require("./lib/connectMongoose");

const Producto = require("./Models/Producto");
const json = JSON.parse(
  fs.readFileSync(__dirname + "/productos.json", "utf-8")
);

loadMeetings(json.productos).catch(err => console.log(err));

async function loadMeetings(productos) {
  try {
    await Anuncio.remove();
    console.log("Productos borrados.");

    await Anuncio.insertMany(productos);
    console.log("Productos cargados.");

    console.log("Hecho!");
    process.exit();
  } catch (e) {
    console.log(e);
    process.exit();
  }
}
