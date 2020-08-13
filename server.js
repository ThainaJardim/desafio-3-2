const express = require('express')
const nunjucks = require('nunjucks')


const server = express()
const videos = require("./data")

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


server.get("/", function ( req, res){
    return res.render("about")
})

server.get("/aulas", function ( req, res ){
    return res.render("aulas", { items: videos })
})


server.listen(5000, function (){
    console.log("server is running")
})