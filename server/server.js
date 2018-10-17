const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const router = require("./routes/index");
const isLocal = process.env.NODE_ENV === "local";
const port = process.env.PORT || 8080;

// If an incoming request uses a protocol other than HTTPS, redirect that
// request to the same url but with HTTPS
const forceSSL = function() {
  return function(req, res, next) {
    if (req.headers["x-forwarded-proto"] !== "https") {
      return res.redirect(["https://", req.get("Host"), req.url].join(""));
    }
    next();
  };
};

// Instruct the app to use the forceSSL middleware if this is on a remote server
if (!isLocal) {
  app.use(forceSSL());
}

app.use(cors());

// API Routing
app.use("/api/v1/", router);

// Run the app by serving the static files in the dist directory
app.use(express.static(path.join(__dirname, "../build")));

app.get("/*", function(req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, "../build") });
});

// Start the app by listening on the default Heroku port
app.listen(port, () => {
  console.log(`Running on Port ${port}`);
});
