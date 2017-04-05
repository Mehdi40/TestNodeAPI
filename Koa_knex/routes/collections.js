import Router from 'koa-joi-router';
import collectionsController from '../controllers/collections';

const router = new Router();

router.route({
  method: 'get',
  path: '/collections/:page?',
  handler: async (ctx) => {
    const result = await collectionsController.indexByUser(ctx.request.query);
    ctx.body = result;
  },
});

export default router;
