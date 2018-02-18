"use strict";

const express = require("express");
const router = express.Router();

const Producto = require("../../models/Producto");

router.get("/", async (req, res, next) => {
  try {
    const producto = req.query.producto;
    const precio = req.query.precio;
    const estado = req.query.estado;
    const skip = parseInt(req.query.skip);
    const limit = parseInt(req.query.limit);
    const sort = req.query.sort;
    const fields = req.query.fields;

    const filtro = {};

    if (typeof producto !== "undefined") {
      filtro.producto = producto;
    }

    if (typeof precio !== "undefined") {
      filtro.precio = {
        $lte: precio
      };
    }

    if (typeof estado !== "undefined") {
      filtro.estado = estado;
    }

    const docs = await Producto.listar(filtro, skip, limit, sort, fields);

    res.json({ succes: true, result: docs });
  } catch (err) {
    next(err);
    return;
  }
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  const data = req.body;
  const producto = new Producto(data);

  producto.save((err, productoGuardado) => {
    if (err) {
      next(err);
      return;
    }
    res.json({ succes: true, result: productoGuardado });
  });
});

router.delete("/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    await Producto.remove({ _id: _id }).exec();
    console.log(result);
    res.json({ sucess: true });
  } catch (err) {
    next(err);
    return;
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const _id = req.params.id;
    const data = req.body;

    const productoActualizado = await Producto.findByIdAndUpdate(_id, data, {
      new: true
    });
    res.json({ succes: true, result: productoActualizado });
  } catch (err) {
    next(err);
    return;
  }
});

module.exports = router;
