const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', function(req, res){
    const query = `SELECT * from gallery ORDER BY id`;
    pool.query(query)
        .then(function(result){
            res.send(result.rows);
        })
        .catch(function(error){
            res.sendStatus(500);
        })
})

router.put('/:id', function(req, res){
    const id = req.params.id;
    let likes = req.body.likes;
    likes ++;
    const query = `UPDATE gallery SET likes=$1 WHERE id=$2`;
    pool.query(query, [ likes, id ])
        .then(function(result){
            res.sendStatus(200);
        })
        .catch(function(error){
            res.sendStatus(500);
        })
})

module.exports = router;