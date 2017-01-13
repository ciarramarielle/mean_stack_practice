angular.module("app").controller("mvMainCtrl", function($scope) {
    $scope.myVar = "Hello world!!";
    
    /* SAMPLE DATA*/
    $scope.courses = [
        {name: "Course 1", featured: true, published: new Date("1/1/2001")},
        {name: "Course 2", featured: true, published: new Date("2/2/2002")},
        {name: "Course 3", featured: true, published: new Date("3/3/2003")},
        {name: "Course 4", featured: false, published: new Date("4/4/2004")},
        {name: "Course 5", featured: false, published: new Date("5/5/2005")}
        ];
});