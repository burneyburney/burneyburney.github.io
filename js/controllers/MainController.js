app.controller('MainController',[
  '$scope', function($scope){
    $scope.title = 'workingTitle';
    $scope.promo = "We Marked the prices up just to mark them down and call it a sale!";
  $scope.product =[{
    name: 'RED SOX GIVEAWAY',
    price: 19,
    productDate: new Date('1999', '', ''),
    img: 'img/the-book-of-trees.jpg'}];
}]);
