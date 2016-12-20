angular.module('app', ['gm.datepickerMultiSelect'])
.controller('AppCtrl', function() {
  var _this = this;
  this.activeDate = null;
  this.activeDate2 = null;
  this.selectedDates = [new Date().setHours(0, 0, 0, 0)];
  this.selectedDates2 = [new Date().setHours(0, 0, 0, 0)];
  this.type = 'individual';
  this.options = {
    startingDay:1,
    minDate:new Date(),
    customClass: function(data) {
      if(_this.selectedDates.indexOf(data.date.setHours(0, 0, 0, 0)) > -1) {
        return 'selected';
      }
      return '';
    }
  }
  
  this.options2 = {
    customClass: function(data) {
      if(_this.selectedDates2.indexOf(data.date.setHours(0, 0, 0, 0)) > -1) {
        return 'selected';
      }
      return '';
    }
  }
  
  this.show2pickers = false;
  
  this.removeFromSelected = function(dt) {
    _this.selectedDates.splice(_this.selectedDates.indexOf(dt), 1);
    /// Need to change activeDate for datepicker to call customClass again
    _this.activeDate = dt;
  }
  
  this.removeFromSelected2 = function(dt) {
    _this.selectedDates2.splice(_this.selectedDates2.indexOf(dt), 1);
    _this.activeDate = dt;  /// Need this so datepicker refreshes view
  }
});