const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

let items = [];
items.push({title:'Learn Node basics'});
items.push({title:'Learn Express basics'});
items.push({title:'Learn Mustache'});
items.push({title:'Learn Html forms with Express'});
items.push({title:'Learn about authentication'});
items.push({title:'Learn how to connect to PostgreSQL'});
items.push({title:'Learn how to create databases'});
items.push({title:'Learn SQL'});
items.push({title:'Learn how to connect to PostgreSQL from Node'});
items.push({title:'Learn how to use Sequelize'});

let list = {};
list.items = items;

function crossedOut(item) {
  if (document.getElementById(input).checked === true){
    document.getElementById(input).className = "checkbox";
  }
    else {
      document.getElementById(input).className = "normal";
    }
  
}

//Listening on root

app.get('/', function (req, res) {
  // TODO write your code here
     res.render('todo',list);
});

// app.listen(3000, function () {
//   console.log('Successfully started express application!');
// })