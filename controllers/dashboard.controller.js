const db = require('../config/sql');

// create form
exports.InsertDataForm = function (req, res) {
    res.render('create-form', {'title': 'Create'});
}

// create
exports.InsertData = function (req, res) {
    db.query(`INSERT INTO data SET username = ?, description = ?, images = ?`, [req.fields.username, req.fields.description, req.fields.images], function (err, results) {
        if (err) {
            throw err;
        } else {
            console.log(results);
            req.flash('info', 'Data is inserted');
            res.redirect('/create-form');
        }
    })
}

// read
exports.showDashboard = function (req, res) {
    db.query(`SELECT id, username, description, images FROM data`, function (err, results) {
        if (err) {
            throw err;
        } else {
            console.log(results);
            res.render('dashboard', { 'title': 'Dashboard', results });
        }
    })
}

// get
exports.EditData = function(req, res) {
    db.query(`SELECT username, description, images FROM data WHERE id = ?`, [req.params.id], function (err, results) {
        if (err) {
            throw err;
        } else {
            console.log(results);
            res.render('edit-data', { 'title': 'Edit', result: results[0] });
        }
    })
}

// update
exports.UpdateData = function (req, res) {
    db.query(`UPDATE data SET username = ?, description = ?, images = ? WHERE id = ?`, [req.fields.username, req.fields.description, req.fields.images, req.params.id], function (err, results) {
        if (err) {
            throw err;
        } else {
            console.log(results);
            req.flash('info', 'Data is updated!');
            res.redirect('/admin/dashboard');
        }
    })
}

// delete
exports.DeleteData = function (req, res) {
    db.query(`DELETE FROM data WHERE id = ?`, [req.params.id], function (err, results) {
        if (err) {
            throw err;
        } else {
            console.log(results);
            req.flash('info', 'Data is deleted!');
            res.redirect('/admin/dashboard');
        }
    })
}