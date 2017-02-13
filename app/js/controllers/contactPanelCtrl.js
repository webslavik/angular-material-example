(function() {

	'use strict';

	let contactPanelCtrl = function($mdBottomSheet, usersFactory) {
		let vm = this;

		vm.actions = [
			{ name: 'Phone', icon: 'phone'},
			{ name: 'Twitter', icon: 'twitter'},
			{ name: 'Google+', icon: 'google_plus'},
			{ name: 'Hangouts', icon: 'hangouts'}
		];

		vm.submitContact = (action) => {
			$mdBottomSheet.hide(action);
		}

		vm.user = usersFactory.selectedUser;

	};

	angular.module('app').controller('contactPanelCtrl', contactPanelCtrl);

})();