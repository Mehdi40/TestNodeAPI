import mysql from 'mysql2/promise';

async function getAll(ctx) {
  const [rows] = await ctx.state.db.query('SELECT * FROM users');
  ctx.body = rows;
};

async function get(ctx, id) {
  const [rows] = await ctx.state.db.query(`SELECT * FROM users WHERE id = ${id}`);
  ctx.body = rows;
};

async function remove (ctx, id) {
  const [rows] = await ctx.state.db.query(`DELETE FROM users WHERE id = ${id}`);
  ctx.body = rows;
};

async function add (ctx) {
  const { username, email } = ctx.request.query;
  const [rows] = await ctx.state.db.query(`INSERT INTO users (email, username) VALUES ('${email}', '${username}')`);
  ctx.body = rows;
};

async function update (ctx, id) {
  const { username, email } = ctx.request.query;
  console.log(ctx);
  const [rows] = await ctx.state.db.query(`UPDATE users SET email = '${email}', username = '${username}' WHERE id = ${id}`);
  ctx.body = rows; 
};

export default { getAll, get, remove, add, update };