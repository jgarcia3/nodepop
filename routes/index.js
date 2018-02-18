var express = require("express");
var router = express.Router();

const { query, validationResult } = require("express-validator/check");

/* GET home page. */
router.get("/", function(req, res, next) {
  //res.render("index", { title: "Nodepop" });

  res.locals.productos = [
    { producto: "pelota", estado: "Se vende", precio: 5 },
    { producto: "camiseta", estado: "Se busca", precio: 15 },
    { producto: "gafas", estado: "Se vende", precio: 25 },
    { producto: "dados", estado: "Se busca", precio: 3 },
    { producto: "cubo", estado: "Se vende", precio: 7 },
    { producto: "marioneta", estado: "Se busca", precio: 10 },
    { producto: "regla", estado: "Se vende", precio: 5 },
    { producto: "chaqueta", estado: "Se busca", precio: 25 },
    { producto: "linterna", estado: "Se busca", precio: 5 },
    { producto: "paraguas", estado: "Se vende", precio: 15 }
  ];
  res.render("index");
});

router.get(
  "/param/:id([0-9]+)/producto/:producto/coste/:coste",
  (req, res, next) => {
    console.log("req.params", req.params);
    res.send(
      `El ID ${req.params.id}, corresponde al producto ${
        req.params.producto
      }, y tiene un coste de ${req.params.coste} €`
    );
  }
);

router.get(
  "/enquerystring",
  [
    query("coste")
      .isNumeric()
      .withMessage("Debería ser un número")
      .custom(value => {
        if (value < 15) {
          throw new Error("Debe costar más de 15€");
        }
        return true;
      })
  ],
  (req, res, next) => {
    validationResult(req).throw();
    console.log("req.query", req.query);
    const id = req.query.id;
    const producto = req.query.producto;
    const coste = req.query.coste;
    res.send(
      `${req.query.estado} el siguiente producto producto ${
        req.query.producto
      }, con un coste de ${req.query.coste} €`
    );
  }
);

router.post("/enelbody", (req, res, next) => {
  console.log("req.body", req.body);
  const id = req.body.id;
  const producto = req.body.producto;
  const coste = req.body.coste;
  res.send(
    `El ID ${req.body.id}, corresponde al producto ${
      req.body.producto
    }, y tiene un coste de ${req.body.coste} €`
  );
});

module.exports = router;
