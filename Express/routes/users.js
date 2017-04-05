import db from '../db';

const getAll = (req, res) => {
  db.query('SELECT * FROM users', (err, rows) => {
    if (err) res.send(err);
    res.send(rows);
  })
} 

const get = (req, res) => {
  const { id } = req.params;
  db.query(`SELECT * FROM users WHERE iddsds = ${id}`, (err, rows) => {
    if (err) res.send(err);
    res.send(rows);
  });
};

const remove = (req, res) => {
  const { id } = req.params;
  db.query(`DELETE FROM users WHERE id = ${id}`, (err, rows) => {
    if (err) res.send(err);
    res.send(rows);
  });
};

const add = (req, res) => {
  const { email, username } = req.query;
  db.query(`INSERT INTO users (email, username) VALUES ('${email}', '${username}')`, (err, rows) => {
    if (err) res.send(err);
    res.send(rows);
  });
};

const update = (req, res) => {
  const { id } = req.params;
  const { email, username } = req.query;
  db.query(`UPDATE users SET email = '${email}', username = '${username}' WHERE id = ${id}`, (err, rows) => {
    if (err) res.send(err);
    res.send(rows);
  });
};

export default { getAll, get, remove, add, update };