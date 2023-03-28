const http = require("http");
const fs = require("fs");
const path = require("path");
let WebSocket;
try {
  WebSocket = require("ws");
} catch (error) {
  console.log("You have not installed ws, hot reload will not work!\n");
}

const port = process.env.PORT || 1080;

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "", req.url === "/" ? "index.html" : req.url);
  const extname = path.extname(filePath);
  let contentType = "text/html";

  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    case ".ico":
      contentType = "image/x-ico";
      break;
    case ".svg":
      contentType = "image/svg";
      break;
  }

  const extensions = [".js", ".css", ".png", ".jpg", ".ico", ".svg"];
  let dest = extensions.find(() => extname) == undefined || req.url == "/" ? "index.html" : req.url;
  let pCount = 0;
  for(d of dest){
    if(d=="."){pCount++};
    if(pCount>1){
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end();
      return
    }
  }
  fs.readFile(path.join(__dirname, dest), (err, data) => {
    if (err) {
      res.writeHead(err.code == "ENOENT" ? 404 : 400, { "Content-Type": "text/plain" });
      res.end(err.message ? err.message : err);
      return;
    }
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data, "utf8");
  });
});

if (WebSocket) {
  const wss = new WebSocket.Server({ server });

  function watchDirectory(directoryPath) {
    fs.watch(directoryPath, (eventType, filename) => {
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send("reload");
        }
      });
    });

    const files = fs.readdirSync(directoryPath);
    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        watchDirectory(filePath);
      }
    });
  }

  watchDirectory("./src");
}

server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
