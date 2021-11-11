angular.module('auth')
    .component('userLogin', {
        templateUrl: '/scripts/components/userLogin/userLogin.template.html',
        controller: function ($scope, $location, authService) {
            this.userName = null;

            this.redirect = function () {
                $location.path('/home');
                $('#exampleModal').modal('hide');
            };

            this.login = function () {
                if (this.userName) {
                    authService.login(this.userName);
                }
                else {
                    alert('Введите имя')
                    return false
                }
                this.redirect();
            }
        }
    });