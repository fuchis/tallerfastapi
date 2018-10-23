'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');
const Book = use('App/Models/User');

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
});

Route.group(() => {
  Route.post('login', 'UserController.login');
  Route.post('users', 'UserController.store');
  Route.get('users', 'UserController.index');
  Route.get('users/:id', 'UserController.show');
  Route.put('users/:id', 'UserController.update');
  Route.delete('users/:id', 'UserController.delete');

  Route.post('sensor', 'SensorController.store');
  Route.get('sensor', 'SensorController.index');
  Route.get('sensor/:id', 'SensorController.show');
  // Route.put('sensor/:id', 'SensorController.update');
  // Route.delete('sensor/:id', 'SensorController.delete');

}).prefix('api/v1');
