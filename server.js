if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ limit : '10mb', extended: false }))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

// routes
app.use('/', indexRouter)


app.get('/signin', function(request, response){
    // response.send('Hello, World');
    response.sendFile('signin.html', { root: 'templates'});
});
app.post('/signin', function(request, response){
    response.send(request.body.userName)
})

app.get('/recommendations', function(request, response){
    // response.send('Hello, World');
    response.sendFile('recs.html', {root: 'templates'})
});
app.get('/signup', function(request, response){
    // response.send('Hello, World');
    response.sendFile('signup.html', { root: 'templates' })
});
app.post('/signup', function(request, response){
    response.send(request.body.firstName)
});


app.get('/input', function(request, response){
    
    response.sendFile('input.html', { root: 'templates' });
});
app.get('/search', function(request, response){
    
    response.sendFile('search.html', { root: 'templates' });
});
app.get('/homepage', function(request, response){
    // response.send('Hello, World');
    response.sendFile('homepage.html', { root: 'templates' });
    
});

// listen for requestst
app.listen((process.env.PORT || 18080), function(){
    console.log("Server is running on port 18080");
});