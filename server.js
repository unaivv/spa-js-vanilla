const express = require("express");
const path = require("path");

const app = express();

/* Ensure any requests prefixed with /static will serve our "frontend/static" directory */
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

/* Redirect all routes to our (soon to exist) "index.html" file */
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running in port http://localhost:3000..."));