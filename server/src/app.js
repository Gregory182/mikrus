import cookieParser from "cookie-parser";
import Express from "express";
import cors from "cors";

const app = new Express();
app.use(cookieParser());

app.use(cors({origin: "http://localhost:5173", credentials: true}));

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello World from API" });
});

app.get("/api/test1", (req, res) => {
  res.json({ message: "Hello World from API test1" });
});

app.post("/api", (req, res) => {
  const kookie = req.cookies;

  console.log(kookie)
  res.json({ message: "Hello World from API test2" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
