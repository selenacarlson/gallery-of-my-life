const app = angular.module('myApp', []);

const galleryController = app.controller('GalleryController', ['$http', function($http){
    let self = this;
    self.galleryArray = [];

    self.getGallery = function(){
        $http({
            method: 'GET',
            url: '/gallery'
        })
        .then(function(res){
            self.galleryArray = res.data;
            console.log(self.galleryArray);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    self.upVote = function(gallery){
        $http({
            method: 'PUT',
            url: `/gallery/${gallery.id}`,
            data: gallery
        })
        .then(function(res){
            self.getGallery();
        })
        .catch(function(error){
            console.log(error);
            console.log(gallery);
        })
    }

    // self.toggleDescription = function(gallery){
    //     gallery.describe = true;
    // }

    self.getGallery();
}])