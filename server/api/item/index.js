import express from 'express';
import controller from './item.controller';

const router = express.Router();

router.get('/', controller.index);
router.get('/arts/page/:pagenum', controller.art);
router.get('/artists/page/:pagenum', controller.artist);
router.get('/institutions/page/:pagenum', controller.institution);
router.get('/artcollaborations/page/:pagenum', controller.artcollaboration);

router.get('/cultures/page/:pagenum', controller.culture);
router.get('/editorials/page/:pagenum', controller.editorial);
router.get('/commercials/page/:pagenum', controller.commercial);
router.get('/culturecollaborations/page/:pagenum', controller.culturecollaboration);

router.get('/page/:pagenum', controller.page);
router.get('/:id', controller.detail);

export default router;
