angular.module('MyApp')
    .directive('FooterDirective', FooterDirective);

function FooterDirective() {
    return {
        templateUrl: 'FooterTemplate.html'
    };
}