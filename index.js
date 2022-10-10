const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

const userRoute = require('./src/routes/users')
app.use('/users', userRoute)

app.get('/', (req, res) => {
    const koneksi = {
        success: true,
        message: "Backend nya jalan!"
    }
    return res.send(koneksi)
})

app.post('/profile', (req, res) => {
    console.log(req.body)
    return res.send({
        success: true,
        message: 'Data terkirim!'
    })
})

app.post('/login', (req, res) => {
    console.log(req.body)
    //const email = req.body.email
    //const password = req.body.password
    const { email, password } = req.body
    if (email === "kuy@server.com" && password === "1234") {
        return res.send({
            success: true,
            message: 'Berhasil login dong'
        })
    } else {
        return res.send({
            success: false,
            message: 'Salah email & password cuy'
        })
    }

})

app.listen(8080, () => {

    console.log('Koneksi di port 8080')

})