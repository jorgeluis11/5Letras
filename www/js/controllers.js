angular.module('starter.controllers', [])
.controller("MotelCtrl", ['$scope','Motels', function($scope, Motels){
	$scope.motels = []

  var motels = Motels.query(function(data){
    $scope.motels = motels;
  });

}])

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

