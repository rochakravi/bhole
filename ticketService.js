
thirApp.service("ticketService",function($http){

		var hotelJsonData ={};

	this.getHotelList = function(){

		$http.get('jsonFiles/hotelList.json')
				.then(function(response){

				hotelJsonData = response.data.recordData ;

			})

		return hotelJsonData ;

	}




});