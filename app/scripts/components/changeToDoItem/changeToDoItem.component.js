angular.module('todos').component('changeToDoItem', {
    templateUrl: '/scripts/components/changeToDoItem/changeToDoItem.template.html',
    bindings: {
        fieldValue: '<',
        fieldType: '@?',
        onUpdate: '&'
    },
    controller: function () {
        this.editMode = false;

        this.handleModeChange = function () {
            if (this.editMode) {
                this.onUpdate({ value: this.fieldValue });
                this.fieldValueCopy = this.fieldValue;
            }
            this.editMode = !this.editMode;
        };

        this.reset = function () {
            this.fieldValue = '';
        };

        this.$onInit = function () {
            // Make a copy of the initial value to be able to reset it later
            this.fieldValueCopy = this.fieldValue;

            // Set a default fieldType
            if (!this.fieldType) {
                this.fieldType = 'text';
            }
        };
    }
});