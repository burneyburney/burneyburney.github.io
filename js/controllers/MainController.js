app.controller('MainController',[
    '$scope', function($scope){
        $scope.title = 'workingTitle';
        $scope.promo = "We Marked the prices up just to mark them down and call it a sale!";
    $scope.product =[{
        name: 'RED SOX GIVEAWAY',
        price: 150,
        productDate: new Date('1999', '00', '01'),
        legoImage: 'http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/red-sox-fig.jpg'
    }];
}]);
