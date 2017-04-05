import Router from 'koa-joi-router';

const router = new Router();

router.route({
  method: 'get',
  path: '*',
  handler: async (ctx) => {
    throw new Error('404 Not Found');
  },
});

export default router;
