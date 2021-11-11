angular.module("todos").component("filtersToDoItems", {
    templateUrl: "/scripts/components/filtersToDoItems/filtersToDoItems.template.html",
    bindings: {
        sort: '=',
        query: '=',
    },
    controller: function () {
        this.sort = 'time';
    },
});