'use strict';

import angular from 'angular';
import 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
	'ui.router'
])
.config(($stateProvider, $urlRouterProvider)=>{

	$stateProvider
		.state('home', {
			url: '/',
			template: '<home></home>',
			title: 'Home'
		});
})
.directive('home', homeComponent);

export default homeModule;
