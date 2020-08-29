const mongoose = require("mongoose");
const dbUrl =
  "mongodb+srv://cnerylozada:19467381Abc@nodeninja.pwwtx.mongodb.net/node_auth?retryWrites=true&w=majority";

const connectToMongoAtlas = () => {
  return mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectToMongoAtlas;
