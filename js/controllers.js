app.controller('SidePanelController',function($scope,User){
	$scope.User = User;
	$scope.User.name = "anon";
});
app.controller('HomeController',function($scope,User){
	$scope.User = User;
	$scope.banner = "Welcome";
});
app.controller('WalkieController',function($scope){
	$scope.banner = "Walkie";
});
app.controller('SettingsController',function($scope){
	$scope.banner = "Settings";
});
