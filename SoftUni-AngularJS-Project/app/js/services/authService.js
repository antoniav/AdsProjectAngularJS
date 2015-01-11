'use strict';


app.factory('authService', 
    function () {
        
        var key = 'user';

        function saveUserData(data) {
            localStorage.setItem(key, angular.toJson(data));
        }

        function getUserData() {
            return angular.fromJson(localStorage.getItem(key));
        }

        function getHeaders(argument) {
            var headers = {};
            var userData = getUserData();
            if (userData) {
                headers.Authorization = 'Bearer ' + getUserData().access_token;
            };

            return headers;
        }

        function removeUser() {
           // localStorage.removeItem(key);
            localStorage.clear();
        }

        function isAdmin () {
            var isAdmin = getUserData().isAdmin;
            return isAdmin;

        }

        function isLoggedIn() {
            // localStorage.getItem(key) != undefined;
           return !!getUserData();
        }

        function isAnonymous() {
            // localStorage.getItem(key) == undefined;
            return !isLoggedIn();
        }

        return {
            saveUser: saveUserData,
            getUser: getUserData,
            getHeaders: getHeaders,
            removeUser: removeUser,
            isAdmin: isAdmin,
            isLoggedIn: isLoggedIn,
            isAnonymous: isAnonymous
        }
});

