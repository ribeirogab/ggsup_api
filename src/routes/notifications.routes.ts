import { Router } from 'express';

import SendNotificationService from '../services/SendNotificationService';

const notificationsRouter = Router();

notificationsRouter.get('/', async (req, res) => {
  return res.json({ ok: true });
});

notificationsRouter.post('/', async (req, res) => {
  const { external_user_ids } = req.body;

  const message = {
    app_id: '13c9de6e-33df-4197-ac4c-396d3a922fd6',
    contents: { en: 'English Message' },
    // included_segments: ['All'],
    include_external_user_ids: external_user_ids,
  };

  SendNotificationService(message);

  return res.status(200).send();
});

export default notificationsRouter;
