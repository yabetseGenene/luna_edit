const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.render('preloader');
});

router.get('/editor', (request, response) => {
    response.render('editor');
});

module.exports = router;
