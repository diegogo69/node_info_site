import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const server = http.createServer((req, res) => {
  let filePath = "";

  switch (req.url) {
    case "/":
      filePath = path.join(__dirname, "../public/index.html");
      break;
    case "/about":
      filePath = path.join(__dirname, "../public/about.html");
      break;
    case "/contact-me":
      filePath = path.join(__dirname, "../public/contact-me.html");
      break;
    default:
      filePath = path.join(__dirname, "../public/404.html");
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end("Server Error");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content);
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
