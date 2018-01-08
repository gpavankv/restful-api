const UsersController = require('../controlllers/users_controller');
module.exports = (app) => {

    //Watch for incoming requests of method GET
    // to the route http://localhost:3050/api
    // app.get('/api', UsersController.greeting);

    app.get('/api/test', UsersController.test);

    app.post('/api/createuser', UsersController.createUser);

    app.post('/api/verifyuser', UsersController.verifyUser);



    // app.put('/api/user/:id', UsersController.edit);
    //
    // app.delete('/api/user/:id', UsersController.delete);
    //
    // app.get('/api/users', UsersController.index);

};