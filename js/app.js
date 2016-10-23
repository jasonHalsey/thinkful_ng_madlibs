angular.module('madapp', ['ngAnimate']).controller('mycntrl', function(){

    var vm = this;
    // vm.reset = function reset(){
    //     console.log('Click It');
    //     myForm.$setPristine();
    // }

    var defaultForm = {
        male_name : "",
        job_title : "",
        tedious_task : "",
        dirty_task : "",
        celebrity : "",
        useless_skill : "",
        obnoxious_celebrity : "",
        huge_number : "",
        adjective : ""
    }

    vm.user = angular.copy(defaultForm);


    vm.reset = function reset() {
        console.log('in');
        vm.myForm.$setPristine();
        vm.user = angular.copy(defaultForm);
        console.log('empty');
    }

    // vm.reset = function ()
    // {
    //      console.log('balls');
    //   myForm.$setPristine();

    // };

    vm.submit = function submit(){
        console.log("Submit");
    }
});