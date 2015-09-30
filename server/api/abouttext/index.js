import express from 'express';
import controller from './abouttext.controller';

const router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.detail)

export default router;
