var ang = angular.module('ChitChat', ['ngRoute']);
ang.factory('User' , function () {
	
	//*******************************
	//* global variables.
	//*******************************
	DEFAULT_USER_IMG = 

	//*******************************
	//* Collection of all users.
	//*******************************
	var Users = {};
	
	//desc: checks if giver <user> key exists in the Users map
	//return true : user key  already exists in map
	//return false: user key does not yet exists in map
	var checkIsUser = function(user){
		if(!Users[user.name]){
			User[user.name] = {name: user};
			if(user.img){
				User[user.name].useDefaultImg = false;
				User[user.name] = user.img;
			}
			else{
				user[user.name].userDefaultImg = true;
			return true;
		}
		else{
			return false;			
		}
	};
	
	
	
	
});

