import express from 'express';
import * as controller from './video.controller';

const router = express.Router();

router.get('/', controller.index);

router.get('/featured', controller.featured);
router.get('/docu-series', controller.docuseries);
// router.get('/radio-tv-film/page/:pagenum', controller.radiotvfilm);
// router.get('/music/page/:pagenum', controller.music);
// router.get('/comedy/page/:pagenum', controller.comedy);
// router.get('/lifestyle/page/:pagenum', controller.lifestyle);

router.get('/:id', controller.detail)

export default router;
