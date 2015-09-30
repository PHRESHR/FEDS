import express from 'express';
import controller from './covervideo.controller';

const router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.detail)

export default router;
