var myFirstAppModule = angular.module('myFirstAppModule', [])




//filter
myFirstAppModule.filter('stripDashes', function(){
	return function(txt){
		return textToFilter.split('-').join(' ');

		};

});


