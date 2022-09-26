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

const get_product = db.prepare(
  /* sql*/
  `
SELECT 
 products.id,
 products.name,
 categories.name AS category_name,
 categories.description AS category_description 
FROM products
JOIN categories ON products.category_id = categories.id
WHERE products.id = ?

`
);

const listProducts = () => list_products.all();

const searchProducts = (text) => find_products.all("%" + text + "%");

const getProduct = (id) => get_product.get(id);

module.exports = { listProducts, searchProducts, getProduct };
