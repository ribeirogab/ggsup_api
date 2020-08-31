import { Router } from 'express';

const testsRouter = Router();

testsRouter.post('/', async (req, res) => {
  return res.json({ ok: true });
});

export default testsRouter;
