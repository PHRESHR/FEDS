import express from 'express';
import * as controller from './video.controller';

const router = express.Router();

router.get('/', controller.index);

router.get('/featured', controller.featured);
router.get('/docu-series', controller.docuseries);
router.get('/radio-tv-film', controller.radiotvfilm);
router.get('/music', controller.music);
router.get('/comedy', controller.comedy);
router.get('/lifestyle', controller.lifestyle);

router.get('/:id', controller.detail)

export default router;
