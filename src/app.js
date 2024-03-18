import Express from "express";

const app = new Express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello World from API" });
});

app.get("/api/test1", (req, res) => {
    res.json({ message: "Hello World from API test1" });
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
