var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
	console.log("Hello controller");

	var refresh = function(){
		$http.get('/contactlist').success(function(response){
			console.log("I got the data I reqested");
			$scope.contactlist = response;
			$scope.contact ="";
		});
	};

	refresh();
	$scope.addContact = function(){
		console.log($scope.contact);
		$http.post('/contactlist', $scope.contact).success(function(response){
			console.log(response);
			refresh();
		});
	};

	$scope.remove = function(id){
		console.log(id);
		$http.delete('/contactlist/' + id).success(function(response){
			refresh();
		});
	};


}]);

myApp.controller('ContactApp',['$scope','$http',function($scope,$http){
	console.log("Hello controller11");
//	$http.get('/contacts');
//	 var refresh =function(){
		$http.get('/contacts').success(function(response1){
			console.log("I got the data I reqested for ContactApp");
			$scope.contacts = response1;
		});
/*			$scope.information ="";
		});
	};
	refresh();

	$scope.addDetails = function(){
		console.log($scope.information);
		$http.post('/contacts', $scope.information).success(function(response){
			console.log(response);
			refresh();
		});
	};
*/
}]);