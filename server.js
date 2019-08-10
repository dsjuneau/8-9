const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("/client/build"));
}

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/dbaugten", {
    useNewUrlParser: true
  })
  .then(() => console.log("Database Connected..."));

app.use(routes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
