import http from "http";
import fs from "fs";
import path from "path";

const PORT = 3000;
const logFile = path.join(process.cwd(), "server.log");

const logRequest = (reqURL, method) => {
  const now = new Date();
  const logEntry = `${now.toISOString()} | ${method} | ${reqURL}\n`;

  fs.appendFile(logFile, logEntry, (err) => {
    if (err) console.log("Error while writing to log file", err);
  });
};

const server = http.createServer((req, res) => {
  const reqURL = req.url;
  const reqMethod = req.method;
  
  logRequest(reqURL, reqMethod);

  if (reqURL === "/") res.end("Home Page");
  else if (reqURL === "/about") res.end("About page");
  else if (reqURL === "/contact") res.end("Contact Page");
  else res.end("404 - Route not found");
});

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
