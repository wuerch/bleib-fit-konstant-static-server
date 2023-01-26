const express = require("express");

const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public/out'))

app.get('/', (req, res) => {
	return res.sendFile(path.join(__dirname, "./public/out", "index.html"));
});
app.get('/impressum', (req, res) => {
	return res.sendFile(path.join(__dirname, "./public/out", "impressum.html"));
});
app.get('/datenschutz', (req, res) => {
	return res.sendFile(path.join(__dirname, "./public/out", "datenschutz.html"));
});

app.listen(process.env.PORT || 3002, function(){console.log("Server started")});
