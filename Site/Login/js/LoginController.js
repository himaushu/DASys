var loginApp = angular.module('login_App', []);

// create angular controller
loginApp.controller('LoginController', function ($scope) {
		// function to submit the form after all validation has occurred			
		$scope.submitForm = function() {

			// check to make sure the form is completely valid
			if ($scope.userForm.$valid) {
			    //alert('our form is amazing');
			    window.location = "/MainPage.html";
			}

		};

	});