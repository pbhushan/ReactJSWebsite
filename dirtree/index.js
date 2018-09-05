var fs = require("fs");
const dirTree = require("directory-tree");
const tree = dirTree("../src/assets/suscom_products", {
  extensions: /\.(png|jpg)$/
});

fs.writeFile("../data/products/products.json", JSON.stringify(tree), function(
  err
) {
  if (err) throw err;
  console.log("Replaced!");
});
