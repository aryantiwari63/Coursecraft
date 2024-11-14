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
const {uploadimg} = require("../Controllers/profile/profileimg");
const {categorycourse} = require("../Controllers/course/categorycourse");
const {coursesubcategory} = require("../Controllers/course/coursesubcategory");
const {getsubcategory} = require("../Controllers/course/getsubcategory");
const {enrollment} = require("../Controllers/course/enrollment");
const {verifyenroll} = require("../Controllers/course/verifyenroll");
const {getenrolllist} = require("../Controllers/course/getenrolllist");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });

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

router.get("/userscore",Authmiddleware,score);

router.post('/upload-profile-image', upload.single('image',uploadimg));

router.get('/categorycourse', categorycourse);

router.post('/subcategory', coursesubcategory);

router.get('/getsubcategory', getsubcategory);

router.post('/enroll', enrollment);

router.get('/verifyenroll', Authmiddleware, verifyenroll);

router.get('/getenrolllist', Authmiddleware, getenrolllist);

// router.post('/upload-image',upload.single('image'), uploadimg);

router.post('/upload-profile-image',  upload.single('image'), uploadimg);




module.exports = router;

