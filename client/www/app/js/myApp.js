
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
  'myApp.appFactory',
  'myApp.mainCtrl',
  'myApp.localAuthCtrl'
   
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
    });
  $stateProvider.state('loginForm', {
      url: '/emailLogin',
      templateUrl: 'app/views/emailLogin.html',
    });
	$stateProvider.state('home', {
   		url: '/home',
    	templateUrl: 'app/views/home.html',
  });
  $stateProvider.state('signup', {
      url: '/signup',
      templateUrl: 'app/views/signup.html',
    });
   $stateProvider.state('localAuth', {
      url: '/localAuth',
      templateUrl: 'app/views/localAuth.html',
    });
    // $stateProvider.state('facebookAuth', {
    //   url: '/facebookAuth',
    //   templateUrl: 'app/views/facebookAuth.html',
    // });
  $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'app/views/Login.html',
    });
   $stateProvider.state('name', {
      url: '/name',
      templateUrl: 'app/views/name.html',
    });
     $stateProvider.state('gender', {
      url: '/gender',
      templateUrl: 'app/views/gender.html',
    });
     $stateProvider.state('age', {
      url: '/age',
      templateUrl: 'app/views/age.html',
    });
     $stateProvider.state('height', {
      url: '/height',
      templateUrl: 'app/views/height.html',
    });
     $stateProvider.state('weight', {
      url: '/weight',
      templateUrl: 'app/views/weight.html',
    });
     $stateProvider.state('activity', {
      url: '/activity',
      templateUrl: 'app/views/activitiy.html',
    });
     $stateProvider.state('summary', {
      url: '/summary',
      templateUrl: 'app/views/summary.html',
    });
     $stateProvider.state('breakfast', {
      url: '/breakfast',
      templateUrl: 'app/views/breakfast.html',
    })
	//if none of the above states are matched, use this as the fallback
  	$urlRouterProvider.otherwise('/home');
});