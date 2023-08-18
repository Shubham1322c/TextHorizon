const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    obj = {
        "Name": "Shubham",
        "Age": 19
    }
    res.json(obj);
})



module.exports = router;