const express = require("express");
const app = express();

app.listen(8000, () => console.log("listening on port 8000"));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));
const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.get("/", (req, res) => {
    res.render("index", {title: "Index"});
});

app.post('/result', (req, res) => {
    console.log(req.body);
    res.render('result', {title: "Result", result: req.body});
});

// app.get('/result', (req, res) => {
//     res.render("result", {title: "Result", result: req.body});
// });

