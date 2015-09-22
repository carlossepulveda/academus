var nodemailer = require('nodemailer');
var express = require('express')
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('dist'));

console.log(process.env.ACDS_EMAIL);
app.post('/launch/user', function(req, res) {
	console.log(req.body);
	var mailOptions = {
        from: process.env.ACDS_EMAIL,
        to: ['ca.sepulveda.sanchez@gmail.com', 'charlesandrew621@gmail.com'],
        subject: 'SOLICITUD USUARIO ACADEMUS',
        html: 'Acabas de recibir una nueva solicitud en Academus.xyz<br/><br/><b>email</b> : ' + req.body.email + '<br/><b>type</b> : ' + req.body.type
    };
    
    transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Message sent: ' + info.response);
	    }
    }); 
    res.send({});
});

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.ACDS_EMAIL,
        pass: process.env.ACDS_EMAIL_PASSWORD
    }
});

var server = app.listen(3001, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})



