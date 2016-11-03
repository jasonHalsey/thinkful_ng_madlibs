angular.module('madapp', ['ngAnimate']).controller('mycntrl', function(){

    var vm = this;
    
    vm.reset = function reset(){
        console.log('Click It');
        vm.myForm = {}
    }
    vm.submit = function submit(){
        console.log("Submit");
    }
});