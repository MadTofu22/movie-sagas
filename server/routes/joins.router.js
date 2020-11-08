const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Route to get the list of genres linked to a movie
router.get('/', (req, res) => {
    queryText = `SELECT * FROM "movies_genres";`;
    // queryParams = [req.params.id];

    pool.query(queryText).then(result => {
        console.log(result.rows);
        res.send(result.rows);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;