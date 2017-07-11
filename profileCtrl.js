
var profile = angular.module("profileApp",[]);

		var contact = {} ;

	profile.filter("addRupees",function(){

		return function(input){
			if(input > 100000){

				input = input/60 ;
				return "$" + input ;
			}else{
				return "Rs." + input ;
			}

			
		}
	});

	profile.controller("profileCtrl",["$scope","$filter","ticketService",function($scope,$filter,ticketService){

		$scope.customFilterTest = ticketService.getHotelList(); 

		$scope.price = $filter('addRupees')(50); // for single data but need to learn on queue. 

		//$scope.filterTestUsingController = $filter('addRupees')($scope.customFilterTest.salary); question to ask


		$scope.list = ["golu","devi"] ; 
		
		//$scope.values = ["golu","chut","kund"] ;



		$scope.msg = "Profile implementation is pending" ;

		$scope.add = function(){

				
			contact = $scope.name ;
			
			$scope.list.push(contact);

			$scope.name = " " ;


		/*//  storing in local storage

			$scope.myJSON = JSON.stringify($scope.list);

			localStorage.setItem("testJSON", $scope.myJSON);

		

		//Retrieving data:
			$scope.text = localStorage.getItem("testJSON");

			$scope.obj = JSON.parse($scope.text);	*/	

		}
		
	}]);