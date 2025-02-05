import { createBareServer } from '@tomphttp/bare-server-node';
import express from 'express';
import http from 'node:http';
import path from "node:path";


const app = express();
const bare = createBareServer("/bare/");
const server = http.createServer();
const __dirname = process.cwd();
const PORT = 8080;

app.use(express.static("img")) // IMGS GET PROIRITY BI
app.get("/ga", function (req, res) {
  res.sendFile(path.join(__dirname, "static/games.html"));
})
app.get("/rga", function(req, res) {
res.sendFile(path.join(__dirname, "static/rga.html"))
})
app.get("/ta", function (req, res) {
  res.sendFile(path.join(__dirname, "static/proxy.html"));
})
app.get("/app", function (req, res) {
  res.sendFile(path.join(__dirname, "static/apps.html"));
})
app.get("/credits", function (req, res) {
  res.sendFile(path.join(__dirname, "static/credits.html"));
})
app.get("/voidurls", function (req, res) {
  res.sendFile(path.join(__dirname, "static/voidurls.html"));
})
app.get("/settings", function (req, res) {
  res.sendFile(path.join(__dirname, "static/settings.html"));
})
app.get("/chat", function (req, res) {
  res.sendFile(path.join(__dirname, "static/chat.html"));
})
app.use(express.static(path.join(__dirname, "static")));

app.get('*', function(req, res) {res.sendFile(path.join(__dirname, "static/404.html"))})

server.on("request", (req, res) => {
if (bare.shouldRoute(req)) {bare.routeRequest(req, res)} else {app(req, res)}})
server.listen({port: PORT}, () => {console.log("listening on port " + PORT)})
