const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Route to get the list of genres linked to a movie
router.get('/:id', (req, res) => {
    queryText = `SELECT * FROM "movies_genres" where "movies_id" = $1;`;
    queryParams = [req.params.id];

    pool.query(queryText, queryParams).then(result => {
        console.log(result.rows);
        res.send(result.rows);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;