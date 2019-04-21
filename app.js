// Load required modules
const express = require('express');
const url = require('url');
const app = express();
const port = 3000;
//Specify where static are located (css, images, javascripts)
app.use(express.static('public'));
//Specify view engine -- i.e. templating engine
app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');  //Pug was chosen as it is the default for Node.js AND there's lots of documentation

//I know there's a better way to do the templating functions but not there yet
//Render home page
app.get('/', (req, res) => {
  res.render('home', {header: 'Home'});
});
//Render login page
app.get('/join', (req,res) =>{
  res.render('join', {header: 'Sign Up'})
});
app.get('/members', (req,res) =>{
  res.render('members', {header: 'Members'})
});
app.listen(port, () => console.log(`Listening on port ${port}`));
