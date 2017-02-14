(function() {

	'use strict';

	let mainCtrl = function($mdSidenav, $mdToast, $mdDialog, $mdMedia, $mdBottomSheet, usersFactory) {
		let vm = this;

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
			usersFactory.selectedUser = vm.selected;
			let sidenav = $mdSidenav('left');
			if (sidenav.isOpen()) {
				sidenav.close();
			}
			vm.tabIndex = 0;
		}

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
				let newUser = usersFactory.createUser(user);
				vm.users.push(newUser);
				vm.selected = newUser;
				self.openToast('User added');
			}, () => {
				console.log('You cancelled the dialog.');
			})
		}

		vm.addNote = (form) => {
			const note = usersFactory.createUserNote(vm.newNote);
			vm.selected.notes.push(note);

			// reset the form
			vm.newNote.title = null;
			vm.newNote.date = null;
			form.noteForm.$setUntouched();
			form.noteForm.$setPristine();

			vm.openToast('Notes added');
		}

		vm.removeNote = (note) => {
			const index = vm.selected.notes.indexOf(note);
			vm.selected.notes.splice(index, 1);

			vm.openToast('Note was removed');
		};

		vm.clearNotes = (event) => {
			let confirm = $mdDialog.confirm()
						 .title('Do you want to clear notes?')
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

		vm.showContactPanel = (event) => {
			$mdBottomSheet.show({
				parent: angular.element(document.getElementById('wrapper')),
				templateUrl: 'js/view/contactPanel.html',
				controller: 'contactPanelCtrl',
				controllerAs: 'contactPanelCtrl',
				bindToController: true,
				targetEvent: event
			}).then((clickItem) => {
				console.log(clickItem.name + ' clicked!');
			}, () => {});
		}


		// vm.selected = null;
		vm.searchText = '';
		vm.users = usersFactory.users;
		vm.selected = usersFactory.defaultUser;

	}

	angular.module('app').controller('mainCtrl', mainCtrl);

})();