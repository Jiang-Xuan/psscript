var scrollToTop = document.getElementById('scroll-to-top');

scrollToTop.onclick = function() {
	window.scrollTo(0,0);
	return false;
}


window.onscroll = function() {
  scrollToTop.style.display = (window.pageYOffset > window.innerHeight) ? 'block' : 'none';
}

var psscript = angular.module('psscript', ['ngRoute']);

psscript.controller('content', function($scope) {
	$scope.message = "Hello Angular.";
})

psscript.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/pages/home.html',
			controller: 'content'
		})
		.when('/concat', {
			
		})
})