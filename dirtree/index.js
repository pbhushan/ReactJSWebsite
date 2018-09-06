var fs = require("fs");
const dirTree = require("directory-tree");
const tree1 = dirTree("../assets/suscom_products", {
  extensions: /\.(png|jpg)$/
});

fs.writeFile("../data/products/products.json", JSON.stringify(tree1), function(
  err
) {
  if (err) throw err;
  console.log("Replaced!");
});

const tree2 = dirTree("../assets/main_products", {
  extensions: /\.(png|jpg)$/
});

fs.writeFile(
  "../data/home/multi_carousel.json",
  JSON.stringify(tree2),
  function(err) {
    if (err) throw err;
    console.log("Replaced!");
  }
);
