const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/process', (req, res) => {
  
  res.sendFile(__dirname+'/views/pr_3.html')
})

app.get('/mrksheet', (req, res) => {
  res.send("aa")
  //res.sendFile(__dirname+'/pr_3.html')
})

app.get('/process', (req,res) =>{
  var no1 = parseInt(req.query.txt1);
  var no2 = parseInt(req.query.txt2);
  var no3 = parseInt(req.query.txt3);
  var no4 = parseInt(req.query.txt4);
  var no5 = parseInt(req.query.txt5);
  var sum = no1 + no2 + no3 + no4 + no5;
  
  var per = (sum*100)/500;

  if(per>90){
      msg = "First class"
  }

  res.send(sum)
  
})

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/home', (req, res) => {
//   res.send('Hello World from home!')
// })
// app.get('/about', (req, res) => {
//   res.send('Hello World from about!')
// })
// app.get('/contact', (req, res) => {
//   res.send('Hello World from contact!')
// })
// app.get('/contact/ruchit', (req, res) => {
//   res.send('Hello ruchit from contact!')
// })
// app.get('/contact/krish', (req, res) => {
//   res.send('Hello krish from contact!')
// })
// app.get('/home', (req, res) => {
//   res.sendFile(__dirname+'/home.html')
// })
// app.get('/about', (req, res) => {
//   res.sendFile(__dirname+'/about.html')
// })
// app.get('/contact', (req, res) => {
//   res.sendFile(__dirname+'/contact.html')
// })
// app.get('/contact/ruchit', (req, res) => {
//   res.sendFile(__dirname+'/contact/ruchit.html')
// })
// app.get('/contact/krish', (req, res) => {
//   res.sendFile(__dirname+'/contact/krish.html')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})