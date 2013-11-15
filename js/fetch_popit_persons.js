var popit_url = document.getElementById('popitUrl').innerHTML;
var popitList = angular.module('popitList', []).config(function($interpolateProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    }
).config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});


popitList.controller(
        'PopitCtrl',
        function($scope, $http){
                // load list of person from popit
                $scope.persons=[];

                $http.jsonp(
                        popit_url+'?callback=JSON_CALLBACK'
                ).success(
                        function(data){
                                $scope.persons = data.result;
                                // console.log({{site.name}});
                        }
                );

        }
);

