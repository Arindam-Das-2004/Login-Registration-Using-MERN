const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors"); // 
const EmployeeModel = require("./models/Employee").default;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee");

// route path
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  EmployeeModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No record exists");
      }
    })
    .catch(err => res.status(500).json("Error in login"));
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => res.status(500).json(err));
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
