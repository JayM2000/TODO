let router = require('express').Router();
const taskz = require('./models/tasks.js');


router.post('/task', async (req, res) => {
    res.send({st:"okkkz..."});
});

     

module.exports = router;