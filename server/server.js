const express = require('express')
const path = require('path')

const app = express()
app.use(express.json())

require('dotenv').config()

const port = process.env.PORT || 4055
// process.env.PORT to get the port from heroku's env file

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world! (live)')

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.use(express.static(path.join(__dirname, '../public')))

const people = []
// person
// {
//     name: name,
//     email: email
// }

app.post('/api/signup', (req, res) => {
    console.log("req.body:", req.body)
    let {name, email} = req.body
    people.push({name: name, email: email})
    console.log("people:", people)
    rollbar.info('signup success live', {name: name, email: email})
    res.status(200).send(`name: '${name}', email: '${email}'`)
})

app.get('/api/critical', (req, res) => {
    try {
        nonExistentFunction()
    } catch (err) {
        rollbar.critical('critical live: failed to find nonExistentFunction')
    }
    // res.status(202)
    res.status(200).send('OK Critical')
})

app.get('/api/warning', (req, res) => {
    rollbar.warning('warning live: handled /api/warning')
    // res.status(202)
    res.status(200).send('OK Warning')
})

app.use(rollbar.errorHandler())

app.listen(port, () => { console.log(`running on port ${port}`)})