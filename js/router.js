// detect when the app's URL matches '/' to render todos template
Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function() {
    
  });
});

// return all existing todos
Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});
