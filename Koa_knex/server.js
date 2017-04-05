import Koa from 'koa';
import router from './routes';

const PORT = 3002;
const app = new Koa();

// Routes
app.use(router());

app.listen(PORT, () => {
  console.log('CORE API server running on port', PORT);
});
