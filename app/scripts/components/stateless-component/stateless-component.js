angular.module('app.homePages')
  .component('statelessComponent', {
    templateUrl: './scripts/components/stateless-component/stateless-component.html',
    bindings: {
        user: '<',
        onUpdate: '&'
    },
    controller: function(){
        this.$onChanges = function(changes) {
            if (changes.user) {
                this.user = angular.copy(this.user);
            }
        }

        this.updateUser = function() {
            this.onUpdate({
                $event: {
                    user: this.user
                }
            })
        }
    },
  })