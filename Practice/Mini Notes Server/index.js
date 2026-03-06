import http from "http";
import fs from "fs";
import path from "path";
import url from "url";

const PORT = 3000;
const notesFile = path.join(process.cwd(), "notes.txt");

const addNote = (parsedURL, res) => {
  const note = parsedURL.query.note;
  if (note) {
    fs.appendFile(notesFile, note + "\n", (err) => {
      if (err) console.log("Error while writing notes file", err);
    });
    res.end("Note Added Successfully");
  } else {
    res.end("400 - Bad Request");
  }
};

const readNotes = (res) => {
  fs.readFile(notesFile, "utf-8", (err, data) => {
    if (err || data.trim() === "") {
      res.end("No Notes Found");
    }
    res.end(data);
  });
};

const clearNotes = (res) => {
  fs.writeFile(notesFile, "", (err) => {
    if (err) res.end("Error clearing notes");
    res.end("All Notes Deleted");
  });
};

const server = http.createServer((req, res) => {
  const parsedURL = url.parse(req.url, true);
  const reqURL = parsedURL.pathname;
  if (reqURL === "/") res.end("Home Page");
  else if (reqURL === "/add") addNote(parsedURL, res);
  else if (reqURL === "/notes") readNotes(res);
  else if (reqURL === "/clear") clearNotes(res);
  else res.end("404 Route Not Found");
});

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
