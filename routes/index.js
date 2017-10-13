var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/chat', function(req, res, next) {
    res.sendFile(path.join(__dirname, "../public/html/chat.html"));
});
router.get('/anychat', function(req, res, next) {
    res.sendFile(path.join(__dirname, "../public/anychat/index.html"));
});
router.post('/json', function(req, res, next) {
    res.writeHead(200, {
        'Content-type': 'application/json;charset=UTF-8'
    });
    res.json({ user: 'tobi' });
});

module.exports = router;
