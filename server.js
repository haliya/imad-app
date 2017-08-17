var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one': {
    title: 'Article one',
    heading: 'Article one',
    content:`
              <p>
                  this is the content of my first article.this is the content of my first 
                      article.this is the content of my first article.this is the content of 
                      my first article.this is the content of my first article.this is the 
                      content of my first article.this is the content of my first article
                      .this is the content of my first article.this is the content of my 
                      first article.this is the content of my first article.this is the 
                      content of my first article.this is the content of my first article
                      .this is the content of my first article.this is the content of my 
                      first article.
              </p>
              <p>
                  this is the content of my first article.this is the content of my first 
                      article.this is the content of my first article.this is the content of 
                      my first article.this is the content of my first article.this is the 
                      content of my first article.this is the content of my first article
                      .this is the content of my first article.this is the content of my 
                      first article.this is the content of my first article.this is the 
                      content of my first article.this is the content of my first article
                      .this is the content of my first article.this is the content of my 
                      first article.this is the content of my first article.this is the 
                      content of my first article.this is the content of my first article
                      .this is the content of my first article.this is the content of my 
                      first article.this is the content of my first article.this is the 
                      content of my first article.this is the content of my first article.
              </p>`
         
    
    
    
    
},
    'article-two':{
        title: 'Article two',
        heading: 'Article two',
        content:`
              <p>
                  this is the content of my second article.
              </p>`
       
         
    
    
    
    
    },
    'article-three':{
         title: 'Article three',
        heading: 'Article three',
        content:`
              <p>
                  this is the content of my third article.
              </p>`
       
    }
};

function createTemplate (data) {
    var title= data.title;
    var heading =data.heading;
    var content = data.content;

var htmlTemplate= `
    
    <html>
    <head>
        <title>
            ${title}
        </title>
   
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class='container'>
            
        <div>
            <a href='/'>Home</a>
            <hr/>
        </div>
        <div>
            <h3>
                ${heading}
            </h3>
        </div>
          <div>
              ${content}
          </div>
        </div>  
        
    </body>
  </html>

      `;
       return htmlTemplate;
    
    
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articlename', function (req, res){ 
var articlename=req.params.articlename;
res.send(createTemplate(articles[articlename]));
    
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
