const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const {signup} = require("../Controllers/profile/signup");
const {course} = require("../Controllers/course/course");
const {login} = require("../Controllers/profile/login");
const {Question} = require("../Controllers/test/question");
const {getQuestion} = require("../Controllers/test/question");
const {submitscore} = require("../Controllers/test/Calculatescore");
const {linksend} = require("../Controllers/password/linksend");
const { updatepassword } = require("../Controllers/password/updatpassword");
const {logout} = require("../Controllers/profile/logout");
const {userdetails} = require("../Controllers/profile/userdetails");
const {score} = require("../Controllers/test/score");
const {Authmiddleware} = require("../Middlewares/Authmiddleware");


router.post("/signup", signup);

router.post("/login", login);

router.post("/linksend", linksend);

router.post("/resetpassword", updatepassword);

router.post("/question", Question );

router.get("/getquestion", getQuestion);

router.post("/submitscore", submitscore);

router.post("/course", course);

router.post("/logout", logout);

router.get("/profiledetail",Authmiddleware,userdetails);

// router.get("/userscore",Authmiddleware,score);



module.exports = router;

