const express = require('express')
const path = require('path')

const app = express()
app.use(express.json())

const port = process.env.PORT || 4055
// process.env.PORT to get the port from heroku's env file

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
    res.status(200).send(`name: '${name}', email: '${email}'`)
})

app.listen(port, () => { console.log(`running on port ${port}`)})