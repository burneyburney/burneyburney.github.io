app.controller('MainController',[
    '$scope', function($scope){
        $scope.title = 'workingTitle';
        $scope.promo = "We Marked the prices up just to mark them down and call it a sale!";
    $scope.product =[{
        name: 'RED SOX GIVEAWAY',
        price: 150,
        productDate: new Date('1999', '00', '01'),
        legoImage: 'http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/red-sox-fig.jpg'
    },
    {
        name: 'SAN DIEGO COMIC-CON SUPERHEROES',
        price: 185,
        productDate: new Date('2012', '00', '01'),
        legoImage: 'http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/sdcc2012figs.jpg'
    },
    {
        name: 'CLOUD CITY BOBA FETT',
        price: 185,
        productDate: new Date('2000', '00', '01'),
        legoImage: 'http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/cloud_city_boba_fett.png'
    },
    {
        name: 'SERIES 10: MR. GOLD EXCLUSIVE:',
        price: 1100,
        productDate: new Date('2010', '00', '01'),
        legoImage: 'http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/mrgold.jpg'
    },
    {
        name: ' SAN DIEGO COMIC-CON AZOG',
        price: 500,
        productDate: new Date('2013', '00', '01'),
        legotImage: 'http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/_12_1.jpg'
    }];
}]);
