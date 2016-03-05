'use strict';

describe('myApp.users-view module', function() {

  beforeEach(module('myApp.usersView'));

  describe('usersView controller', function(){

    it('should exist', inject(function($controller) {

      var usersViewCtrl = $controller('usersViewCtrl');
      expect(usersViewCtrl).toBeDefined();

    }));

    it('should show users',inject(function($controller) {

      var usersViewCtrl = $controller('usersViewCtrl');
      expect(usersViewCtrl.users).toBeDefined();

    }));

  });
});