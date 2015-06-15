app.controller('NavController',function($scope){
	$scope.user = "anon";
});
app.controller('HomeController',function($scope){
	$scope.banner = "Welcome";
});
app.controller('WalkieController',function($scope){
	$scope.banner = "Walkie";
});
app.controller('SettingsController',function($scope){
	$scope.banner = "Settings";
});
