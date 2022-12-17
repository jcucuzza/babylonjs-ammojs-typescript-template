import express, { Application, Request, Response } from "express";
import path from "path";
import http from "http";
// import expressLayouts from "express-ejs-layouts";

const app: Application = express();
const server: http.Server = http.createServer(app);

const publicDirectoryPath = path.join(__dirname, "./public");
app.use(express.static(publicDirectoryPath));

// Setting the port
const port = normalizePort(process.env.PORT || "3000");

// EJS setup
// app.use(expressLayouts);

// Setting the root path for views directory
app.set("views", path.join(__dirname, "views"));

// Setting the view engine
app.set("view engine", "ejs");

/* Home route */
app.get("/", (req: Request, res: Response) => {
  res.render("index", {});
});

server.listen(port, () => {
  console.log(`SERVER RUNNING ON ${port}`);
});

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val: string) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}
