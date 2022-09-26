const db = require("../database/db.js");

const list_products = db.prepare(
  /*sql*/
  `
SELECT id, name, quantity_per_unit, unit_price, units_in_stock, units_on_order
FROM products
`
);

const find_products = db.prepare(
  /*sql */
  `
SELECT 
 id,
 name
FROM products
WHERE name LIKE  ?
`
);

const listProducts = () => list_products.all();

const searchProducts = (text) => find_products.all("%" + text + "%");

module.exports = { listProducts, searchProducts };
