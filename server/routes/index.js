import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

// All other routes should redirect to the index.html
// router.get('/*', (req, res, next) => {
//   res.sendfile('/public/index.html');
// });

export default router;
