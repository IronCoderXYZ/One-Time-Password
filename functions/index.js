const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');
const serviceAccount = require('./service_account.json');
const requestOneTimePassword = require('./request_one_time_password');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-3ac48.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestOneTimePassword = function.https.onRequest(requestOneTimePassword);
