const Product = require("../models/product.model");

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(allTheProducts => res.json({ products: allTheProducts }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.productId })
        .then(oneSingleProduct => res.json({ product: oneSingleProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createOneNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => res.json({ product: newlyCreatedProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateAnExistingProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body,
        { new: true })
        .then(updatedProduct => res.json({ product: updatedProduct }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteOneExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};