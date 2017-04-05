import Router from 'koa-joi-router';
import scoutsController from '../controllers/scouts';

const Joi = Router.Joi;
const router = new Router();

router.route({
  method: 'post',
  path: '/scouts/',
  validate: {
    body: {
      scoutId: Joi.number().integer(),
    },
    type: 'json',
  },
  handler: async (ctx) => {
    ctx.body = await scoutsController.addScout(ctx.request.body.scoutId);
  },
});

export default router;
