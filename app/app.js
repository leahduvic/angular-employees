const app = angular.module("EmployeeApp", ["ngRoute"])

angular.module("EmployeeApp").config(function ($routeProvider) {
    /**
     * Configure all Angular application routes here
     */
    $routeProvider
        .when("/employees/list", {
            templateUrl: "app/employees/partials/list.html",
            controller: "EmployeeListCtrl"
        })
        .when('/employees/new', {
            templateUrl: 'app/employees/partials/create.html',
            controller: 'EmployeeCreateCtrl'
        })
        .when('/employees/detail/:employeeId', { // <-- Magic happens here
            templateUrl: 'app/employees/partials/detail.html',
            controller: 'EmployeeDetailCtrl'
        })  
        .otherwise('/employees/list')
})





//         app.controller("employeeCtrl", function ($scope, $http) {
//             $scope.employees = []
            
            
//             $scope.fireEmployee = function (employee, key) {
//                 employee.employmentEnd = Date.now()
//                 $http
//                     .put(`https://employees-bcc40.firebaseio.com/employees/${key}/.json`,
//                         employee
//             )
//                     .then (getEmployee)
//             }

//             $scope.deleteEmployee = function (key) {
//                 $http 
//                     .delete(`https://employees-bcc40.firebaseio.com/employees/${key}/.json`)
//                     .then (getEmployee)
//             }

//             $scope.addEmployee = function() {
//                 const newEmployee = {
//                     "firstName": $scope.newFirstName,
//                     "lastName": $scope.newLastName,
//                     "employmentStart": Date.now(),
//                     "employmentEnd": 0
//                 }
//                 $scope.employees.push(newEmployee)
                
//                 $http({
//                     method: "POST",
//                     url:"https://employees-bcc40.firebaseio.com/employees/.json",
//                     data: JSON.stringify(newEmployee)
//                 }) 
//                 $scope.newEmployee = "" 
//             }
            
//             const getEmployee = function() {
//                 $http({
//                     method: "GET",
//                     url: "https://employees-bcc40.firebaseio.com/employees/.json"
//                 }).then(function (response) {
//                     $scope.employees = response.data
//                 })
//         }
//         getEmployee()
//     })

