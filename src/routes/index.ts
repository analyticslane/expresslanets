import { Router } from 'express';

import auth from './auth';
import v0 from './v0';

const router = Router();

router.use('/auth', auth);
router.use('/v0', v0);

export default router;
