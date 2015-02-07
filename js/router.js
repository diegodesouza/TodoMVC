// detect when the app's URL matches '/' to render todos template
Todos.Router.map(function() {
  this.resource('todos', { path: '/' });
});
