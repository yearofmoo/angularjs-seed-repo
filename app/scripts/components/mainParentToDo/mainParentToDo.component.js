angular.module('todos', ['auth'])
    .component('mainParentToDo', {
        templateUrl: '/scripts/components/mainParentToDo/mainParentToDo.template.html',
        controller: function (authService) {
            this.user = authService.getUser();
            this.todos = [];
            this.filterQuery = '';
            this.sortByState = 'time';

            this.addNewToDo = function ($event) {
                this.todos.push($event);
            };

            this.updateTodo = function ({ todoId, prop, value }) {
                this.todos = this.todos.map(function (todo) {
                    return todo.id === todoId ? Object.assign(todo, { [prop]: value }) : todo;
                });
            };

            this.deleteItem = function (todo) {
                let index = this.todos.indexOf(todo);
                this.todos.splice(index, 1);
            };

            this.deleteList = function () {
                this.todos = [];
            };
        },
    });
