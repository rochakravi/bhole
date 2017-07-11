
secApp.service("mallService",function($http){

	var jsonData ={};
	var gitDatas =[];
	this.callRecordsJson = function(){

		$http.get('jsonFiles/records.json')
				.then(function(response){
					jsonData = response.data.batter ;
				})
		return jsonData ;
	}

	/*this.gitApi = function(){

		$http.get("https://api.github.com/users")
				.then(function(response){
					gitDatas = response.data;
				})
		return gitDatas ;		
	} */
	this.testService = function(){

		return "one is coming from external service bade miya" ;
	}
});