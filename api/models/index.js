const mongoose = require('mongoose');
mongoose.set("debug", true);
mongoose
	.connect('mongodb://localhost:27017/hidzama-project', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('connected successfuly :D');
	})
	.catch((err) => {
		console.log('oh no errror', err);
	});
mongoose.Promise = Promise; // omogućava nam .then i . catch na mongo funkcijama


module.exports.Termins = require("./termins");
