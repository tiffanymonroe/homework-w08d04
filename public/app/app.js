const app = angular.module('bookApp', [])

app.controller('mainController', [function(){
  const controller = this;
  this.books = [];

  this.getBooks = function(){
    $http({
      method: 'get',
      url: '/books'
    }).then(
      function(res){
        controller.books = res.data
      },
      function(err){
        console.log(err);
      }
    )
  }
}])
