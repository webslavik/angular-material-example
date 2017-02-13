(function() {

	'use strict';

	let mainCtrl = function($mdSidenav, $mdToast, usersFactory) {
		let vm = this;
		vm.selected = null;

		vm.openToast = (message) => {
			$mdToast.show(
				$mdToast.simple()
					.textContent(message)
					.position('top right')
					.hideDelay(3000)
			);
		};

		vm.toggleSidenav = () => {
			$mdSidenav('left').toggle();
		}

		vm.selectUser = (user) => {
			vm.selected = user;
			let sidenav = $mdSidenav('left');
			if (sidenav.isOpen()) {
				sidenav.close();
			}
			vm.tabIndex = 0;
		}

		vm.removeNote = (note) => {
			const index = vm.selected.notes.indexOf(note);
			vm.selected.notes.splice(index, 1);
			vm.openToast('Note was removed');
		};

		vm.addUser = (event) => {
			console.log('Add user');
		}


		vm.searchText = '';
		vm.users = usersFactory.users;
		vm.selected = vm.users[0];

	}

	angular.module('app').controller('mainCtrl', mainCtrl);

})();