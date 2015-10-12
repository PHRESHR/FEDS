import express from 'express';
import * as controller from './search.controller';

const router = express.Router();

router.get('/:param', controller.index);

export default router;
