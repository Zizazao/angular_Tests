var myFirstAppModule = angular.module('myFirstAppModule', [])


myFirstAppModule.controller('MyFilterDemoCtrl', function ($scope) {
	var someData = {            
	   	firstName: 'JENNA',            
		surname: 'GRANT',            
		dateJoined: new Date(2010, 2, 23),            
		consumption: 123.659855,            
		plan: 'super-basic-plan'        
		};
        $scope.data = someData;        

	} 
);

//filter
myFirstAppModule.filter('stripDashes', function(){
	return function(txt){
		return textToFilter.split('-').join(' ');

		};

});


