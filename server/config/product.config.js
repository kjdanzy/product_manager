const mongoose = require("mongoose");
const db_name = "product_mgr_database";

mongoose.connect(`mongodb://localhost/product_mgr_database`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database!!'))
    .catch((err) => console.log("Something went wrong, here is the error", err));
