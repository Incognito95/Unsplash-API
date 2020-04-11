const { collection, gridLayout, search_query } = require('../controllers/collection.controller');

module.exports = function (app) {
    app.get('/collection', collection);
    app.get('/grid', gridLayout);
    app.get('/search', search_query);
}