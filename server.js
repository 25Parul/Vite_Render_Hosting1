import express from "express";
import path from "path";
const app = express();
const port = 3030;

// fileURLToPath function converts file URL to file path string.
import { fileURLToPath } from "url";

// "import.meta.url" represents the URL of the current module.
// function converts import.meta.url value into the current file's path.
const __filename = fileURLToPath(import.meta.url);

// path.dirname function extracts the directory path from the __filename
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, "/dist")))

app.get("/", (req, res)=>{
    res.send("The Power of Human Connection")
})

app.listen(port, ()=>{
    console.log("Listening on port", port)
})