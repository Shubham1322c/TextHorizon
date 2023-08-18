const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    obj = {
        "Name": "Harsh",
        "Age": 21
    }
    res.json(obj);
})



module.exports = router;