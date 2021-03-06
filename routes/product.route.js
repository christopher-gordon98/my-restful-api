var express = require('express');
var services = require('./../services');
var productRoutes = express.Router();
var controller = require('./../controllers');

productRoutes.post('/', controller.product.create);

productRoutes.get('/', controller.product.fetch);

productRoutes.get('/:id', controller.product.fetch);

productRoutes.patch('/:id', controller.product.update);

productRoutes.delete('/:id', controller.product.remove);

module.exports = () => {
  return productRoutes;
};
