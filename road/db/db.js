const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose
  .connect("mongodb://127.0.0.1:27017/road", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("you are connected with the db with road");
  })
  .catch((e) => console.log(e.message));
