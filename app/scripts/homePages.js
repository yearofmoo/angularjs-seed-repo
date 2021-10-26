var listToDo = {
  user: "Артур",
  toDo: [
    // { description: "Что-то сделать", state: true },
    // { description: "Что-то сделать2", state: false },
    // { description: "Что-то сделать3", state: false },
    // { description: "Что-то сделать4", state: true },
  ],
};

angular.module('app.homePages', [])
  .controller('ToDoListCtrl', function ($scope) {
    $scope.data = listToDo;
    $scope.validation = function (value) {
      return value ? true : false;
    }

    $scope.addNewToDo = function () {
      $scope.data.toDo.push({
        description: $scope.toDoName,
        time: $scope.timeForToDo,
        state: false,
      });

      $scope.toDoName = "";
      $scope.timeForToDo = "";
    }

    $scope.setStyle = function (state) {
      return state ? "color: green" : "color: red";
    }

    $scope.showText = function (state) {
      return state ? "Выполнено" : "В процессе";
    }

    $scope.delete = function () {
      $scope.data.toDo.splice(this.toDo, 1);
    }
  });

// https://metanit.com/web/angular/2.2.php
