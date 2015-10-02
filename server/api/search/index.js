import express from 'express';
import * as controller from './search.controller';

const router = express.Router();

router.get('/q?', controller.index);

export default router;
