(function() {

	angular.module('app', ['ngMaterial', 'ngMdIcons'])
				 .config(($mdIconProvider, $mdThemingProvider) => {
				  	$mdIconProvider
				  		.icon('menu', 'img/icons/menu.svg', 24);

				  	$mdThemingProvider
				  		.theme('default')
				  		.primaryPalette('blue')
				  		.accentPalette('red');

				 });


})();

