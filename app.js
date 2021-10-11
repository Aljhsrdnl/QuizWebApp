const { render } = require('ejs');
const express = require('express');
const app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/sign-up', (req, res) => {
    res.render('signUp')
})

app.get('/sign-in', (req, res) => {
    res.render('signIn')
})

app.listen(8080, () => {
    console.log('Listening on port 8080');
})