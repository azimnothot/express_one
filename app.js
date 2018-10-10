var express = require('express');
var app = express();

var handlebars = require('express-handlebars').create({defaultLayout: 'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

var fortunes = [
  "Победи свои страхи, или они победят тебя.",
  "Рекам нужны истоки.",
  "Не бойся неведомого.",
  "Тебя ждет приятный сюрприз.",
  "Будь проще везде, где только можно.",
  ];

app.get('/', function (req, res) {
  var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
res.render('home', { fortune: randomFortune });
});

app.get('/about', function (req, res) {
  res.render("about");
});


app.use(function(req, res, next){
  res.status(404);
  res.render('404');
  });

  app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});