(function() {

	angular.module('app', ['ngMaterial', 'ngMdIcons'])
				 .config(($mdIconProvider, $mdThemingProvider) => {
				  	$mdIconProvider
				  		.defaultIconSet('img/icons/avatars.svg', 128)
				  		.icon('menu', 'img/icons/menu.svg', 24);

				  	$mdThemingProvider
				  		.theme('default')
				  		.primaryPalette('blue')
				  		.accentPalette('red');

				 });


})();

