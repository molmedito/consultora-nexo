var app = angular.module('consultoraNexo', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'vistas/inicio.html',
        controller: 'homeClase'
    })
    .when('/servicios', {
        templateUrl: 'vistas/servicios.html',
        controller: 'serviciosClase'
    })
    .when('/area-comercial', {
        templateUrl: 'vistas/area-comercial.html',
        controller: 'areasClase'
    })
    .when('/area-estudio', {
        templateUrl: 'vistas/area-estudio.html',
        controller: 'areasClase'
    })
    .when('/area-marketing', {
        templateUrl: 'vistas/area-marketing.html',
        controller: 'areasClase'
    })
    .when('/clientes', {
        templateUrl: 'vistas/clientes.html',
        controller: 'clientesClase'
    })
    .when('/contacto', {
        templateUrl: 'vistas/contacto.html',
        controller: 'contactoClase'
    });
}]);

// home page controller
app.controller('homeClase', function($scope) {
    $scope.pageClass = 'page-home';
});

// about page controller
app.controller('serviciosClase', function($scope) {
    $scope.pageClass = 'page-servicios';
});

// contact page controller
app.controller('areasClase', function($scope) {
    $scope.pageClass = 'page-area';
});

// contact page controller
app.controller('clientesClase', function($scope) {
    $scope.pageClass = 'page-clientes';
});

// contact page controller
app.controller('contactoClase', function($scope) {
    $scope.pageClass = 'page-contacto';
});