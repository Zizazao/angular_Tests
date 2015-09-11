var myFirstAppModule = angular.module('myFirstAppModule', [])


myFirstAppModule.controller('MyFilterDemoCtrl', function ($scope) {       

	} 
);

//filter
myFirstAppModule.filter('stripDashes', function(){
	return function(txt){
		return textToFilter.split('-').join(' ');

		};

});


