import http from "http";
import os from "os";

const server = http.createServer((req, res) => {
  // request Info
  const reqURL = req.url;
  console.log("request url:", reqURL);
  const reqMethod = req.method;
  console.log("request Method:", reqMethod);
  console.log("----------------------------------");

  // Conditional Page Info
  if (reqURL === "/") res.end("Babu Page");
  if (reqURL === "/home") res.end("Home Page");
  if (reqURL === "/users") res.end("List of users");

  // OS Info
  if (reqURL === "/deviceinfo") {
    const totalMemGB = (os.totalmem() / 1024 ** 3).toFixed(2);
    const freeMemGB = (os.freemem() / 1024 ** 3).toFixed(2);
    const userInfo = os.userInfo();
    const info = `
    OS Platform: ${os.platform()}
    OS Type: ${os.type()}
    OS Release: ${os.release()}
    CPU Architecture: ${os.arch()}
    Hostname: ${os.hostname()}
    Memory: ${freeMemGB}GB free of ${totalMemGB}GB
    Current User: ${userInfo.username}
    Home Directory: ${os.homedir()}
    `;
    res.end(info);
  }
});

server.listen(3000);
