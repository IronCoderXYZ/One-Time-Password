module.exports = function(req, res) {
  if (!req.body.body || !req.body.code) {
    return res.status(422).send({ error: 'Phone number and code must me provided'});
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, '');
  const code = parseInt(code);

  
}
