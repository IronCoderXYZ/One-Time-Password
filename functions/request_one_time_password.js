const admin = require('firebase-admin');
const twilio = require('./twilio');

module.exports = function(req, res) {
  if (!req.body.phone) {
    return res.status(422)
      .send({ error: 'You must provide a phone number, please try again'});
  }

  const phone = String(req.body.phone).replace(/[^\d]/g);

  admin.auth().getUser(phone)
    .then(user => {
      const code = Math.floor((Math.random() * 8999 + 1000));

      twilio.messages.create({
        body: 'Your code is ' + code,
        to: phone,
        from: '+17082953247'
      });

    })
    .catch((err) => {
      res.status(422).send({ error: err });
    });
}
