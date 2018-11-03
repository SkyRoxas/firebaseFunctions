const functions = require('firebase-functions');
var admin = require("firebase-admin")

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

let i = 0
exports.coupons = functions.https.onRequest((request, response) => {
 response.send('test');
 console.log(i)
 i++
});
