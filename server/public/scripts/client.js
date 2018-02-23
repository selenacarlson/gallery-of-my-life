const app = angular.module('myApp', []);

const galleryController = app.controller('GalleryController', ['$http', function($http){
    let self = this;
    let gallery = [];

    self.getGallery = function(){
        $http({
            method: 'GET',
            url: '/gallery'
        })
        .then(function(response){
            gallery = response.data;
            console.log(gallery);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    self.getGallery();
}])