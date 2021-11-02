angular.module('app.homePages')
  .component('statefulComponent', {
    templateUrl: './scripts/components/stateful-component.html',
    controller: function(){

        this.user = {
          name: 'Jonny BeGood',
          location: 'St. Louis, USA'
        }

        this.userUpdate = function($event) {
          this.user = $event.user;
        }
    },
  })