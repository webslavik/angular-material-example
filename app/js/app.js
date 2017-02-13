(function() {

	angular.module('app', ['ngMaterial', 'ngMdIcons'])
				 .config(($mdIconProvider, $mdThemingProvider) => {
				  	$mdIconProvider
				  		.defaultIconSet('img/icons/avatars.svg', 128)
				  		.icon('google_plus', 'img/icons/google_plus.svg', 512)
				  		.icon('hangouts', 'img/icons/hangouts.svg', 512)
				  		.icon('twitter', 'img/icons/twitter.svg', 512)
				  		.icon('phone', 'img/icons/phone.svg', 512)
				  		.icon('menu', 'img/icons/menu.svg', 24);

				  	$mdThemingProvider
				  		.theme('default')
				  		.primaryPalette('blue')
				  		.accentPalette('red');

				 });


})();

