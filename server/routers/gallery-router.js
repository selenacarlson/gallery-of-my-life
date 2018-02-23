const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', function(req, res){
    const query = `SELECT * from gallery`;
    pool.query(query)
        .then(function(result){
            res.send(result.rows);
        })
        .catch(function(error){
            res.sendStatus(500);
        })
})

module.exports = router;