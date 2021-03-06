(function () {
    angular
        .module("testYummly")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "home.html"
            })
            .when("/search", {
                templateUrl: "views/yummly/templates/search-yummly.view.client.html",
                controller: "searchYummlyController",
                controllerAs: "model"
            })
            .when("/search_ingred", {
                templateUrl: "views/yummly/templates/ingredient-detail.view.client.html",
                controller: "ingredientDetailController",
                controllerAs: "model"
            })
            .when("/detail/:recipeId", {
                templateUrl: "views/yummly/templates/detail-yummly.view.client.html",
                controller: "detailYummlyController",
                controllerAs: "model"
            })
            .when("/login", {
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/user/templates/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/user/:uid", {
                templateUrl: "views/user/templates/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model"
            })
    }
})();
