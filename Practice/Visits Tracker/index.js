import http from "http";
import fs from "fs";
import path from "path";
import url from "url";

const PORT = 3000;

const visitsFile = path.join(process.cwd(), "visits.txt");
const logFile = path.join(process.cwd(), "logs.txt");

const logRequest = (route, method) => {
  const now = new Date();
  const log = now.toISOString() + " | " + route + " | " + method + "\n";
  fs.appendFile(logFile, log, (err) => {
    if (err) console.log("Error writing log file", err);
  });
};

const readLogs = async (res) => {
  const data = await fs.promises.readFile(logFile, "utf-8");
  if (data.trim() === "") res.end("No logs to display");
  res.end(data);
};

const visitsCounter = async (res) => {
  const data = await fs.promises.readFile(visitsFile, "utf-8");
  const count = Number(data) + 1;
  fs.writeFile(visitsFile, count.toString(), (err) => {
    if (err) console.log("Error while writing", err);
  });
  res.end("Visit Count:" + count.toString());
};

const readVisitsCount = async () => {
  const data = await fs.promises.readFile(visitsFile, "utf-8");
  if (data.trim() === "") return 0;
  return Number(data);
};

const resetVisitCount = (res) => {
  fs.writeFile(visitsFile, "0", (err) => {
    if (err) console.log("Error Resetting", err);
  });
  res.end("Visit Counter Reset Successfully");
};

const server = http.createServer(async (req, res) => {
  const parsedURL = url.parse(req.url, true);
  const route = parsedURL.pathname;
  const method = req.method;

  logRequest(route, method);

  if (route === "/") res.end("Home Page");
  else if (route === "/visit") {
    visitsCounter(res);
  } else if (route === "/count") {
    const count = await readVisitsCount();
    if (count === 0) res.end("No Visits Recorded");
    else res.end("Total Visits: " + count.toString());
  } else if (route === "/reset") resetVisitCount(res);
  else if (route === "/logs") {
    readLogs(res);
  } else res.end("404 - Route not found");
});

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:3000`);
});
