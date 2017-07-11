

thirApp.filter('filterTest',function(){

		return function(gender){

			switch(gender){

				case 1 :

					return "Male" ; 

				case 2 :

					return "Female" ; 
			}
		}

	});

thirApp.filter("addRupees",function(){

		return function(input){
			if(input > 100000){

				input = input/60 ;
				return "$" + input ;
			}else{
				return "Rs." + input ;
			}

			
		}
	});

