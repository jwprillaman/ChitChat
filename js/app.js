var app = angular.module('ChitChat', ['ngRoute']);
app.factory('User' , function () {
	return { name: '',
					 handle: ''};
});
