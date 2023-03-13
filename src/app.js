const express = require("express");
require("./db/conn");
const Stud = require("./models/students");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello from the other sides.");
// });

app.post("/students", (req, res) => {
  console.log(req.body);

  const user = new Stud(req.body);

  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
