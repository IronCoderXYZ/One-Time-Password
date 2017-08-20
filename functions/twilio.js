const twilio = require('twilio');

const accountSID = 'AC2eea8946f3fb14a953f9cf6d72c1ee8d';
const authToken = '1542520282fa2a6cb32fd00da14499b1';

module.exports = new twilio.Twilio(accountSID, authToken);
