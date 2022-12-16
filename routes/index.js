var express = require('express');
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messagesAll: messages });
});

/* GET Message Form */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message'});
});

/* GET Message Form */
router.post('/new', function(req, res, next) {
  console.log(req.body.name)
  let userIn = req.body.name;
  console.log(req.body.message)
  let msgIn = req.body.message;
  messages.push({text: msgIn, user: userIn, added: new Date()});
  res.redirect('/');
});



module.exports = router;
