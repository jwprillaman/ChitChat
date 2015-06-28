ang.controller('SidePanelController',function($scope,User){
	$scope.User = User;
	$scope.User.name = "anon";
});
ang.controller('HomeController',function($scope,User){
	$scope.User = User;
	$scope.banner = "Welcome";
});
ang.controller('WalkieController',function($scope){
	$scope.banner = "Walkie";
});
ang.controller('SettingsController',function($scope){
	$scope.banner = "Settings";
});
