const db = require('../config/sql');


// if you use const then you don't need to change the value of variable. Value will stay the same
// if you use let then you will be able to change the value to something else

// search collection
exports.search_query = function (req, res) {
    db.query(`SELECT id, username, description FROM data WHERE id LIKE '%1%'`, [req.query.username, req.query.description],function(err, results) {
        if(err) {
            throw err;
        } else {
            console.log(results);
            res.render('collection', {'title': 'Collection', results})
        }
    })
 
 }

// show collection
exports.collection = function (req, res) {
    db.query(`SELECT id, username, description, images FROM data`, function (err, results) {
        if (err) {
            throw err;
        } else {
            //console.log(results);
            res.render('collection', { 'title': 'Table Layout', results });
        }
    })
}

exports.gridLayout = function (req, res) {
    db.query(`SELECT id, username, description, images, portfolio FROM data`, function (err, results) {
        if (err) {
            throw err;
        } else {
            // console.log(results);
            res.render('grid', { 'title': 'Grid Layout', results });
        }
    })
}