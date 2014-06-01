'use strict';

RMModule.factory('RMModelFactory', ['RMStaticApi', function(StaticApi) {

  return function(_config) {

    function Model(_scope, _pk) {
      this.$type = Model;
      this.$initialize(_scope, _pk);
    }

    angular.extend(Model, StaticApi);
    Model.$initialize(_config);

    return Model;

  };

}]);
