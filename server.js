const express = require('express');
// const morgan = require("morgan")
const cors = require("cors")

const nodemailer = require('nodemailer');

const mysql = require("mysql");

const app = express();

const port = process.env.PORT || 3001;





// const novedadesModel = require("./src/model/nodevadesModels")





require('dotenv').config(); //este siempre se declara antes de los app.use --> sinó da error
// app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))



app.post('/api/contacto', async (req, res) => {
    console.log('recibiendo POST  a /api/contacto')
    console.log(req.body) //para saber si me trae los datos (el nombre, el mail, etc)

    const mail = {
        to: 'jacky04_20@hotmail.com',
        subject: 'Contacto desde la web Con Codigos',
        html: `${req.body.nombre} se contactó a traves de la web y quiere mas info a este correo: ${req.body.email} <br> El motivo del mensaje es:  ${req.body.motivo} <br> Además hizo el siguiente comentario: ${req.body.mensaje}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        }

    })


    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    })


});






const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "ortea"
});

app.get("/api/novedades", (req, res) => {

    db.query("SELECT * FROM novedades", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });




});










app.listen(port, () => {
    console.log(`Server inicia at http://localhost:${port}`)
});











// app.get("/api/test", (req, res) => {
//     res.json({message:"funciona el api"})
// })


// novedadesModel.getNovedades().then(res=>{
//     console.log(res)
// })
//esto me muestra las novedades en la consola
// app.use('/api/novedades', novedadesModel)

// app.get('/api/novedades', async (req, res, next) => {
//     await novedadesModel.getNovedades(); //aca traemos las novedades
//     // console.log(listadoNovedades)

// });

