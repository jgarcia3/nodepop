"use strict";

const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({
  producto: { type: String, index: true },
  estado: { type: String, index: true },
  precio: Number
});

productoSchema.statics.listar = function(
  filtro,
  skip,
  limit,
  sort,
  fields,
  callback
) {
  const query = Producto.find(filtro);
  query.skip(skip);
  query.limit(limit);
  query.sort(sort);
  query.select(fields);
  return query.exec(callback);
};

const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;
