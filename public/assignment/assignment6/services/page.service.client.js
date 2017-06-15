(function () {
    angular
        .module("WebAppMaker")
        .service("pageService", PageService);

    function PageService($http) {

        this.createPage = createPage;
        this.findPageByWebsiteId = findPageByWebsiteId;
        this.findPageById = findPageById;
        this.updatePage = updatePage;
        this.deletePage = deletePage;

        function createPage(websiteId, page) {
            var url = '/api/website/' + websiteId + '/page';
            return $http.post(url, page)
                .then(function (response) {
                    return response.data;
                });
        }

        function findPageByWebsiteId(websiteId) {
            var url = '/api/website/' + websiteId + '/page';
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findPageById(pageId) {
            var url = '/api/page/' + pageId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function updatePage(pageId, page) {
            var url = '/api/page/' + pageId;
            return $http.put(url, page)
                .then(function (response) {
                    return response.data;
                });
        }

        function deletePage(pageId) {
            var url = '/api/page/' + pageId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();
