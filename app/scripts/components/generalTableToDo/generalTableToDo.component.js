angular.module('todos')
    .component('generalTableToDo', {
        templateUrl: '/scripts/components/generalTableToDo/generalTableToDo.template.html',
        bindings: {
            todos: '<',
            query: '<',
            sort: '<',
            onDeleteItem: '&',
            onUpdate: '&'
        },
        controller: function () {
            this.deleteItem = function (todo) {
                this.onDeleteItem({
                    $event: todo
                });
            };

            this.setStyle = function (state) {
                return state ? { color: "green" } : { color: "red" };
            };

            this.showText = function (state) {
                return state ? "Выполнено" : "В процессе";
            };

            this.update = function (todoId, prop, value) {
                this.onUpdate({ $event: { todoId, prop, value } });
            };
        },
    });