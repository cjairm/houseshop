const derby = require('derby');

const app = derby.createApp('derby-project', __filename);

app.use(require('derby-debug'));

const mainController = require("./controllers/index");

app.loadViews(`${__dirname}/pages`);

app.get("/", mainController.homeController);

module.exports = app;
