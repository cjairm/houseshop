process.env.MONGO_HOST = "mongo";

require('derby-starter').run(__dirname, { port: 3456 });