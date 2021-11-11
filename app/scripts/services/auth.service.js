angular.module('auth', [])
    .factory('authService', function () {
        let user = null;

        return {
            login: function (userName) {
                user = userName;
            },
            logout: function () {
                user = null;
            },
            getUser: function () {
                return user;
            }
        };
    });