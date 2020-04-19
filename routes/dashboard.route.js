const { showDashboard, InsertDataForm, InsertData, EditData, UpdateData, DeleteData } = require('../controllers/dashboard.controller');

module.exports = function(app) {
    app.get('/admin/dashboard', showDashboard);
    app.get('/create-form', InsertDataForm);
    app.post('/create', InsertData);
    app.get('/edit-data/:id', EditData);
    app.post('/edit-data/:id', UpdateData);
    app.get('/delete-data/:id', DeleteData);
}