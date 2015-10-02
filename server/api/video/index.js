import express from 'express';
import * as controller from './video.controller';

const router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.detail)

router.get('/docu-series/page/:pagenum', controller.docuseries);
// router.get('/radio-tv-film/page/:pagenum', controller.radiotvfilm);
// router.get('/music/page/:pagenum', controller.music);
// router.get('/comedy/page/:pagenum', controller.comedy);
// router.get('/lifestyle/page/:pagenum', controller.lifestyle);

export default router;
