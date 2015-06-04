
//console.log('myApp');
angular.module('myApp',['ionic',
  'myApp.mealCtrl',
  'myApp.appFactory',
  'myApp.mainCtrl',
  'myApp.AuthCtrl',
  'myApp.activityCtrl'
   
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
 
  $stateProvider.state('emailLogin', {
      url: '/emailLogin',
      templateUrl: 'app/views/auth/emailLogin.html',
    });
  $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'app/views/auth/home.html',
  });
  $stateProvider.state('signup', {
      url: '/signup',
      templateUrl: 'app/views/auth/signup.html',
    });
   $stateProvider.state('emailSignup', {
      url: '/emailSignup',
      templateUrl: 'app/views/auth/emailSignup.html',
    });
    // $stateProvider.state('facebookAuth', {
    //   url: '/facebookAuth',
    //   templateUrl: 'app/views/facebookAuth.html',
    // });
   $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'app/views/auth/Login.html',
    });
    $stateProvider.state('profile', {
      url: '/profile',
      templateUrl: 'app/views/auth/profile.html',
    });
   
     $stateProvider.state('goal', {
      url: '/goal',
      templateUrl: 'app/views/userInfo/goal.html',
    });
      $stateProvider.state('genderandAge', {
      url: '/genderandAge',
      templateUrl: 'app/views/userInfo/genderandAge.html',
    });
   
     $stateProvider.state('heightAndWeight', {
      url: '/heightAndWeight',
      templateUrl: 'app/views/userInfo/heightAndWeight.html',
    });
     $stateProvider.state('activity', {
      url: '/activity',
      templateUrl: 'app/views/userInfo/activitiy.html',
    });
    //  $stateProvider.state('summary', {
    //   url: '/summary',
    //   templateUrl: 'app/views/summary.html',
    // });
     $stateProvider.state('breakfast', {
      url: '/breakfast',
      templateUrl: 'app/views/meals/breakfast.html',
    })
  //if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/home');
});