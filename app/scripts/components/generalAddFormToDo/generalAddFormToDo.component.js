angular.module("todos")
    .component("generalAddFormToDo", {
        templateUrl: "/scripts/components/generalAddFormToDo/generalAddFormToDo.template.html",
        bindings: {
            onAdd: "&",
        },
        controller: function ($scope) {
            this.onSubmit = function () {
                if (this.toDoName && this.timeForToDo) {
                    this.onAdd({
                        $event: {
                            id: this.uuidv4(),
                            description: this.toDoName,
                            time: this.timeForToDo,
                            state: false,
                        },
                    });

                    this.toDoName = "";
                    this.timeForToDo = "";

                    $scope.form.$setPristine();
                    $scope.form.$setUntouched();
                } else {
                    alert('Невозможно отправить пустое значение!')
                }
            };

            this.uuidv4 = function () {
                return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
                );
            };

            this.validation = function (value) {
                return !value;
            };
        },
    });