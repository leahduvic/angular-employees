angular
.module("EmployeeApp")
.factory("EmployeeFactory", function ($http, $location) {
    return Object.create(null, {
        "cache": {
            value: null,
            writable: true
        },
        "list": {
            value: function () {
                return $http({
                    method: "GET",
                    url: "https://employees-bcc40.firebaseio.com/employees/.json"
                }).then(response => {
                    const data = response.data

                    // Make an array of objects so we can use filters
                    this.cache = Object.keys(data).map(key => {
                        data[key].id = key
                        return data[key]
                    })
                    return this.cache
                })
            }
        },
        "single": {
            value: function (key) {
                return $http({
                    method: "GET",
                    url: `https://employees-bcc40.firebaseio.com/employees/${key}/.json`
                }).then(response => {
                    return response.data
                })
            }
        },
        "add": {
            value: function (employee) {
                return $http({
                    method: "POST",
                    url: "https://employees-bcc40.firebaseio.com/employees/.json",
                    data: {
                        "firstName": employee.firstName,
                        "lastName": employee.lastName,
                        "employmentStart": Date.now(),
                        "employmentEnd": 0
                    }
                })
            }
        },
        "fire": {
            value: function (employee, key) {
                employee.employmentEnd = Date.now()
                return $http({
                    method: "PUT",
                    url: `https://employees-bcc40.firebaseio.com/employees/${key}/.json`,
                    data: employee
                })
            }
        },
        "delete": {
            value: function (key) {
                return $http({
                    method: "DELETE",
                    url: `https://employees-bcc40.firebaseio.com/employees/${key}/.json`
                })
            }
        },
        "find": {
            value: function (searchString) {
                const result = this.cache.find(emp => {
                    return emp.firstName.includes(searchString) ||
                           emp.lastName.includes(searchString)
                })
                return result
            }
        }
    })
})