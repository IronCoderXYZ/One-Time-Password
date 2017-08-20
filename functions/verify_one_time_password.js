const admin = require('firebase-admin');

module.exports = function(req, res) {
  if (!req.body.phone || !req.body.code) {
    return res.status(422).send({ error: 'Phone number and code must me provided'});
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '');
  const code = parseInt(req.body.code);

  admin.auth().getUser(phone)
    .then(() => {
      const ref = admin.database().ref('users/' + phone);
      ref.on('value', snapshot => {
        ref.off();
        const user = snapshot.val();

        if (user.code !== code || !user.codeValid) {
          return res.status(422).send({ error: 'Entered code is not valid, please try again' });
        }

        ref.update({ codeValid: false });

        admin.auth().createCustomToken(phone)
          .then(token => res.send({ token: token }));
      });
    })
    .catch((err) => res.status(422).send({ error: err }));
}
