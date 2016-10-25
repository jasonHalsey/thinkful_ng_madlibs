angular.module('madapp', ['ngAnimate']).controller('mycntrl', function(){

    var vm = this;
    
    vm.reset = function reset(){
        console.log('Click It');
        vm.myForm = {}
    }



    // vm.reset = function reset() {
    //     console.log('in');
    //     vm.myForm.$setPristine();
    //     vm.user = angular.copy(defaultForm);
    //     console.log('empty');
    // }

    vm.submit = function submit(){
        console.log("Submit");
    }
});