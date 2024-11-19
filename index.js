var express = require('express');
const mongoose = require('mongoose');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  var a =10;
  var b = 20;
  var c = a +b;
  var msg = "";
  if(c=30){
    msg = "Yes"
  }
  res.render('home', { mya:a,myb:b,mymsg:msg});
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/add', function(req, res, next) {
  res.render('add');
});

router.post('/add', function(req, res, next) {
  res.render('add');
});



router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
router.post('/contactprocess', function(req, res, next) {
  var a= req.body.txt1;
  var b = req.body.txt2;
  var c = a+b;
  res.render('ans',{mya:a,myb:b,myc:c})
});
router.get('/maildemo', function(req, res, next) {
  res.send("Mail sent");
  const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use true for port 465, false for all other ports
  auth: {
    user: "ruchit8p@gmail.com",
    pass: "xyfa hpcx wpqj quqx",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"uski ben ki c" <ruchit8p@gmail.com>', // sender address
    to: "ruchitmesia812@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
});

router.get('/fileupload', function(req, res, next) {
  res.render('fileupload');
});

router.post('/fileupload', function(req, res, next) {
  var a = req.body.txt1;
  // console.log(req.files);
  var myfiles = req.files.file123;
  var filename = req.files.file123.name;
  //upload
  myfiles.mv("public/uploads"+filename,function(err){
    res.send("File uploaded");
  })
});

router.get('/register', function(req, res, next){
  res.render('register')
});
router.post('/registerprocess', function(req, res,next){
  var a = req.body.txt1;
  var b = req.body.txt2;
  var c = req.body.txt3;
  var d = req.body.txt4;
//session
req.session.username = a;
req.session.email = b;
req.session.Mo_no = c;
req.session.password = d;

//redirect
res.redirect('/dashboard');
});

router.get('/dashboard', function(req,res,next){
  if(req.session.username == ){

  }
})




module.exports = router;