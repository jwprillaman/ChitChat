var ang = angular.module('ChitChat', ['ngRoute']);
ang.factory('User' , function () {
	return { name: '',
					 room: ''};
});

