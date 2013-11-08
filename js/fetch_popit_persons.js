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
                        'http://fci.popit-api.dev.mysociety.org/api/persons?callback=JSON_CALLBACK'
                ).success(
                        function(data){
                                $scope.persons = data.result;
                                // console.log(data.result);
                        }
                );
                $scope.persons2 = [
                {name: 'fierita', id:2},
                {name: 'pan', id:2},
                {name: 'agua', id:3},
                {name: 'fuego', id:4},
                {name: 'tierra', id:5},
                {name: 'aire', id:6},
                ];

        }
);