
//console.log('myApp');
angular.module('myApp',['ionic','myApp.splashCtrl','myApp.signupCtrl'])
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
    })

  	//if none of the above states are matched, use this as the fallback
  	$urlRouterProvider.otherwise('/home');
});