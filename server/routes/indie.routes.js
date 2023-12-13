const concertController = require('../controllers/indie.controller');

module.exports = app => {
    app.get('/api/indie', concertController.findAll);
    app.post('/api/indie', concertController.create);
    app.get('/api/indie/:id', concertController.findOne);
    app.put('/api/indie/:id', concertController.update);
    app.delete('/api/indie/:id', concertController.delete); 
}

