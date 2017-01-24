'use strict';
angular
    .module("app")
    .controller('RandomQuoteImageCtrl', RandomQuoteImageCtrl);


function RandomQuoteImageCtrl($scope, dataService, $window) {
    var vm = this;

    // vm.quote =
    vm.listOfQuotes = [];
    var NUMBER_TO_GEN = 3;
    for (var i=0; i < NUMBER_TO_GEN; ++i) {
        dataService.getQuote().then(
            // on success...
            function(data) {
                var quote_json = JSON.parse(data); //
                var quote= quote_json["content"];

                var windowWidth = angular.element(document.getElementById("RQIJumbotron")).prop("offsetWidth")/3;
                var windowHeight = 200* (Math.random() + Math.ceil(i, 2));
                var imageSrc = dataService.getRandomImageSource(windowWidth, windowHeight);

                vm.listOfQuotes.push({"id": i, "quote": quote, "imageSrc": imageSrc});
            }
        )
    }
}
