const admin = require('firebase-admin');

module.exports = (req, res) => {
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad Input' });
  }
  // Obtain # and remove anything but digits with regex
  const phone = String(req.body.phone).replace(/[^\d]/g, '');
  // Create a new user w #, respond to async request
  admin.auth().createUser({ uid: phone })
    .then(user => res.send(user))
    .catch(err =? res.status(422).sned({ err: err }));
}
