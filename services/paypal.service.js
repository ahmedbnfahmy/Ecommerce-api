var paypal = require ('paypal-rest-sdk');

const dotenv = require("dotenv");
dotenv.config();

paypal.configure({
    'mode': process.env.PAYPAL_MODE,
    'client_id': process.env.PAYPAL_CLIENT_ID,
    'client_secret': process.env.PAYPAL_CLIENT_SECRET
});

exports.createPaypalPayment = async(payment)=>{
    return new Promise ((resolve, reject)=>{
        paypal.payment.create(payment, function(err, payment){
            if(err){
                console.log("hhhhhh")
                reject(err)
            }
            else{
                resolve(payment)
            }
        })
    })
}