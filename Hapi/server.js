import Hapi from 'hapi';
import Users from './routes/users';

const PORT = 3002;
const server = new Hapi.Server();
server.connection({port: PORT, host: 'localhost'});

server.route({
  method: 'GET',
  path: '/users',
  handler: Users.getAll,
})

server.route({
  method: 'PUT',
  path: '/users',
  handler: Users.add,  
})

server.route({
  method: 'GET',
  path: '/users/:id',
  handler: Users.get,  
})

server.route({
  method: 'DELETE',
  path: '/users/:id',
  handler: Users.remove,  
})

server.route({
  method: 'POST',
  path: '/users/:id',
  handler: Users.update,  
})

server.start((err) => {
  if (err) throw err;
  console.log(`Server running at: ${server.info.uri}`);
})
