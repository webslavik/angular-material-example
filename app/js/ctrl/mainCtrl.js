(function() {

	'use strict';

	let mainCtrl = function($mdSidenav, $mdToast, $mdDialog, $mdMedia, usersFactory) {
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
			let self = this;
			let useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));

			$mdDialog.show({
				templateUrl: 'js/view/newUserDialog.html',
				parent: angular.element(document.body),
				targetEvent: event,
				controller: 'addUserCtrl',
				controllerAs: 'addUserCtrl',
				clickOutsideToClose: true,
				fullscreen: useFullScreen
			}).then((user) => {
				self.openToast('User added');
			}, () => {
				console.log('You cancelled the dialog.');
			})
		}

		vm.clearNotes = (event) => {
			let confirm = $mdDialog.confirm()
						 .title('Do you want to clear delete notes?')
						 .textContent('All of the banks have agreed to forgive you your debts.')
						 .targetEvent(event)
						 .ok('Yes')
		         .cancel('No');

			$mdDialog.show(confirm).then(() => {
				vm.selected.notes = [];
				vm.openToast('Clear all notes!');
			}, () => {
				console.log(`You didn't clear notes.`);
			});
		}


		vm.searchText = '';
		vm.users = usersFactory.users;
		vm.selected = vm.users[0];

	}

	angular.module('app').controller('mainCtrl', mainCtrl);

})();