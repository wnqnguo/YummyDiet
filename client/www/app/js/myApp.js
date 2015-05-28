
//console.log('myApp');
angular.module('myApp',['ionic',
  'myApp.splashCtrl',
  'myApp.signupCtrl',
  'myApp.nameCtrl',
  'myApp.genderCtrl',
  'myApp.ageCtrl',
  'myApp.weightCtrl',
  'myApp.heightCtrl',
  'myApp.summaryCtrl',
  'myApp.activityCtrl',
  'myApp.mealCtrl',
  'myApp.appFactory'
  ])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider){
  console.log('redirect to home');
  $stateProvider.state('splash', {
      url: '/splash',
      templateUrl: 'app/views/splash.html',
      //controller: 'splashCtrl'
    });
	$stateProvider.state('home', {
   		url: '/home',
    	templateUrl: 'app/views/home.html',
    //controller: 'homeCtrl'
  	});
  $stateProvider.state('signup', {
      url: '/signup',
      templateUrl: 'app/views/signup.html',
      //controller: 'signupCtrl'
    });
   $stateProvider.state('name', {
      url: '/name',
      templateUrl: 'app/views/name.html',
      //controller: 'signupCtrl'
    });
     $stateProvider.state('gender', {
      url: '/gender',
      templateUrl: 'app/views/gender.html',
      //controller: 'signupCtrl'
    });
     $stateProvider.state('age', {
      url: '/age',
      templateUrl: 'app/views/age.html',
      //controller: 'signupCtrl'
    });
     $stateProvider.state('height', {
      url: '/height',
      templateUrl: 'app/views/height.html',
      //controller: 'signupCtrl'
    });

     $stateProvider.state('weight', {
      url: '/weight',
      templateUrl: 'app/views/weight.html',
      //controller: 'signupCtrl'
    });
     $stateProvider.state('activity', {
      url: '/activity',
      templateUrl: 'app/views/activitiy.html',
      //controller: 'signupCtrl'
    });
     $stateProvider.state('summary', {
      url: '/summary',
      templateUrl: 'app/views/summary.html',
      //controller: 'signupCtrl'
    });
     $stateProvider.state('breakfast', {
      url: '/breakfast',
      templateUrl: 'app/views/breakfast.html',
      //controller: 'signupCtrl'
    })


  	//if none of the above states are matched, use this as the fallback
  	$urlRouterProvider.otherwise('/name');
});