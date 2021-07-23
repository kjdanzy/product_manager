const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/product/", ProductController.getAllProducts);
    
    app.get("/api/product/:productId", ProductController.getOneSingleProduct);
    app.put("/api/product/update/:id", ProductController.updateAnExistingProduct);

    app.post("/api/product/new", ProductController.createOneNewProduct);
    
    app.delete("/api/product/delete/:id", ProductController.deleteOneExistingProduct);
};