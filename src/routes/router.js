const express = require('express');
const TurndownService = require('turndown');
const router = express.Router();
const fs = require('fs');

let turndownService = new TurndownService();


router.get('/', (request, response) => {
    response.render('preloader');
});

router.get('/editor', (request, response) => {
    response.render('editor');
});

router.get('/conversion', (request, response) => {
    response.render('converter');
});

router.post('/editor_content', (request, response) => {
    console.log(request.body);
});

router.post('/editor_export_md', (request, response) => {
    let markdown = turndownService.turndown(request.body.content);
    fs.writeFile('luna.md',markdown, function (err) {
      response.status(200).download('luna.md', 'luna.md');
    });
});

router.post('/editor_export_html', (request, response) => {
    fs.writeFile('luna.html',request.body.content, function (err) {
      response.status(200).download('luna.html', 'luna.html');
    });
});

module.exports = router;
