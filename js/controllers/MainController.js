app.controller('MainController',[
  '$scope', function($scope){
    $scope.title = 'CHANGE IT!';
    $scope.promo = "newPromo?";
  $scope.products =[{
    name: 'The Book of Trees',
    price: 19,
    pubdate: new Date('2014', '03', '08'),
    cover: 'img/the-book-of-trees.jpg'}];
  }]);
