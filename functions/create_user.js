const admin = require('firebase-admin');

module.exports = function(req, res) {
  // Verify the #
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad Input' });
  }

  // Format the p# to remove non digits
  const phone = String(req.body.phone).replace(/[^\d]/g, '');

  // Create a new user account w #
  admin.auth().createUser({ uid: phone })
    .then(user => res.send(user))
    .catch(err => res.status(422).send({ error: err }));

  // Respond to the user request, saying the account was made
}
