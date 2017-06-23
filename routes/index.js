var express = require('express');
var router = express.Router();

/*router.get('/chat', function(req, res, next) {
    res.render();
});*/
router.get('/home', function(req, res, next) {
    res.send("hello home");
});
router.post('/json', function(req, res, next) {
    res.writeHead(200, {
        'Content-type': 'application/json;charset=UTF-8'
    });
    res.json({ user: 'tobi' });
});

module.exports = router;
