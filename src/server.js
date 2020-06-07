const nunjucks = require('nunjucks');

const express = require('express');
const server = express();

server.use(express.static('public'));

nunjucks.configure('src/views', {
    express: server,
    noCache: true
});

server.set("view engine", "njk")

server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um titulo" });
});

server.get("/create-point", (req, res) => {
    return res.render("create-point.html");
});

server.get("/search", (req, res) => {
    return res.render("search-results.html");
});


server.listen(3000);