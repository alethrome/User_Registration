const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Student = require("./models/Student");

mongoose.connect("mongodb://127.0.0.1:27017/students", { useNewUrlParser: true });

mongoose.connection.once("open", () => {
    console.log("Mongodb connection established successfully");
});

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    Student.find((err, students) => {
        if (err) {
            console.log(err);
        } else {
            res.json(students);
        }
    });
});

app.post("/create", (req, res) => {
    const Student = new Student(req.body);
    Student
        .save()
        .then((Student) => {
            res.json(Student);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
});

app.get("/:id", (req, res) => {
    const id = req.params.id;
    Student.findById(id, (err, Student) => {
        res.json(Student);
    });
});

app.post("/:id", (req, res) => {
    const id = req.params.id;
    Student.findById(id, (err, Student) => {
        if (!Student) {
            res.status(404).send("Student not found");
        } else {
            Student.lastName = req.body.lastName;
            Student.firstName = req.body.firstName;
            Student.midName = req.body.midName;
            Student.bDay = req.body.bDay;
            Student.gender = req.body.gender;
            Student.studentID = req.body.studentID;
            Student.email = req.body.email;

            Student
                .save()
                .then((Student) => {
                    res.json(Student);
                })
                .catch((err) => res.status(500).send(err.message));
        }
    });
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});