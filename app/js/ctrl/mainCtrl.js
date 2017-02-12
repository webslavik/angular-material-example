(function() {

	'use strict';

	let mainCtrl = function($mdSidenav, usersFactory) {
		let vm = this;
		vm.selected = null;
		vm.searchText = '';

		vm.toggleSidenav = () => {
			$mdSidenav('left').toggle();
		}

		vm.selectUser = (user) => {
			vm.selected = user;

			let sidenav = $mdSidenav('left');
			if (sidenav.isOpen()) {
				sidenav.close();
			}
		}

		vm.users = usersFactory.users;
		vm.selected = vm.users[0];

	}

	angular.module('app').controller('mainCtrl', mainCtrl);

})();