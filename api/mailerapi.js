const mailller=require('../schema/schemaRegister');
const nodemailer=require('nodemailer');
 module.exports={
 	sendMail: function(data){
 		let transporter= nodemailer.createTransport({
 			service: "gmail",
 			host: "smtp.gmail.com",
 			auth: {
 				user: "aman1214609@jmit.ac.in",
 				pass: "Aman@609aK"
 			},
 			 tls: { rejectUnauthorized: false }
 		});

 		var mailoption= {
 			from: "aman1214609@jmit.ac.in",
 			to: data,
 			subject: "you are sccuessfully log in",
 			html:"<h3>Hello You got the mail for verifications<h3>" 

 		};

 		transporter.sendMail(mailoption,function(err,info){
 							
							if(err)
							{
								console.log(err);
							}
							else
							{
								console.log(info);
							}
							
						});
 	}


 }