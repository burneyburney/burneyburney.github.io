app.controller('MainController',[
  '$scope', function($scope){
    $scope.title = 'workingTitle';
    $scope.promo = "We Marked the prices up just to mark them down and call it a sale!";
  $scope.product =[{
    name: 'The Book of Trees',
    price: 19,
    pubdate: new Date('2014', '03', '08'),
    cover: 'img/the-book-of-trees.jpg'}];
  }]);
