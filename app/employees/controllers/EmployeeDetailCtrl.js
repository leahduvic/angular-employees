angular.module("EmployeeApp")
.controller("EmployeeDetailCtrl", function ($scope, $location, $routeParams, EmployeeFactory) {
    $scope.employee = {}
    
            EmployeeFactory.single($routeParams.employeeId).then(employee => {
                $scope.employee = employee
            })

            $scope.fireEmployee = () => 
            EmployeeFactory.fire($scope.employee, $routeParams.employeeId).then(()=> $location.url("/"))
            
            $scope.deleteEmployee =() =>
            EmployeeFactory.delete($routeParams.employeeId).then(() => $location.url("/"))
})
