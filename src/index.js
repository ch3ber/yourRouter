"use strict";
exports.__esModule = true;
var index_1 = require("@router/index");
index_1.Router.createInstance({
    path404: '/notFound',
    renderId: '#app'
});
var router = index_1.Router.getInstance();
var Menu = function () {
    var view = "\n    <ul>\n      <li><a href=\"/#/\">Go to Home</a></li>\n      <li><a href=\"/#/test\">Go to Test</a></li>\n      <li><a href=\"/#/test/test\">Go to Test</a></li>\n      <li><a href=\"/#/product/123\">Go to dynamic route</a></li>\n      <li><a href=\"/#/newpost/321\">Go to dynamic route similar</a></li>\n      <li><a href=\"/#/post/:id\">Go to dynamic route</a></li>\n      <li><a href=\"/#/api/products/categories/small/:id\">Go to extend dynamic route</a></li>\n      <li><a href=\"/#/api/products\">Go to json</a></li>\n      <li><a href=\"/#/api/product/:id\">Go to dynamic json</a></li>\n    </ul>\n  ";
    return view;
};
var DynamicRoute = function () {
    var param = router.getRouteParam();
    var view = "<h1>The route param is: ".concat(param, "</h1>");
    return view;
};
var foo = function () {
    var view = "\n    <h1>Test page addRoute</h1>\n    ".concat(Menu(), "\n  ");
    return view;
};
var Home = function () {
    var view = "\n    <h1>Home</h1>\n    ".concat(Menu(), "\n  ");
    return view;
};
router.addRoute('/', function () {
    console.log(router.getRouteInfo());
    return Home;
    // document.querySelector('body')!.innerHTML = Home() as string
});
router.addRoute('/test', function () {
    console.log(router.getRouteInfo());
    return foo;
    // document.querySelector('body')!.innerHTML = foo() as string
});
router.addRoute('/test/test', function () {
    console.log(router.getRouteInfo());
    return foo;
    // document.querySelector('body')!.innerHTML = foo() as string
});
router.addRoute('/product/:id', function () {
    console.log(router.getRouteInfo());
    return DynamicRoute;
    // document.querySelector('body')!.innerHTML = foo() as string
});
router.addRoute('/newpost/:id', function () {
    console.log(router.getRouteInfo());
    return DynamicRoute;
    // document.querySelector('body')!.innerHTML = foo() as string
});
router.addRoute('/notFound', function () {
    console.log(router.getRouteInfo());
    return function () { return '<h1>Error 404</h1>'; };
    // document.querySelector('body')!.innerHTML = '<h1>Error 404</h1>'
});
