const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(express.json()); // allows the app to use json;
app.use(express.urlencoded({ extended: true }));
app.use(cors());  // be able to talk between apps

require("./server/config/product.config");

// This is where we import the jokes routes function from our joke.routes.js file
const AllMyProductRoutes = require("./server/routes/product.routes");
AllMyProductRoutes(app);

app.listen(port, () => console.log(`Listening on port number ${port}!!!`));

