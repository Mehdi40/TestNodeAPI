import express from 'express';
import Users from './routes/users';

const app = express();
const PORT = 3001;

app.route('/users')
  .get(Users.getAll)
  .put(Users.add);

app.route('/users/:id')
  .get(Users.get)
  .delete(Users.remove)
  .post(Users.update);

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});
