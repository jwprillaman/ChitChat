app.controller('NavController',function($scope){
	$scope.user = "anon";
});
app.controller('HomeController',function($scope){
	$scope.banner = "Welcome";
	$scope.username = 'anon';
	$scope.setUsername = function(name) {
		$scope.username = name;
		return $scope.username;
	}
	
});
app.controller('WalkieController',function($scope){
	$scope.banner = "Walkie";
});
app.controller('SettingsController',function($scope){
	$scope.banner = "Settings";
});
