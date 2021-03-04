const derby = require("derby");

const app = derby.createApp("controllerswithdata", __filename);
const mainController = require("./controllers/index");

app.loadViews(`${__dirname}/pages`);

// app.get("/", mainController.firstController);

//app.use((error, page, model) => {
	//console.log(error);
//});

module.exports = app;
