(function (_, Kotlin, $module$react, $module$kotlin_extensions) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main(args) {
    var obj = {};
    var el = $module$react.createElement('test', obj, 'test');
    println(JSON.stringify(el));
  }
  var package$test = _.test || (_.test = {});
  package$test.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('dist', _);
  return _;
}(module.exports, require('kotlin'), require('react'), require('kotlin-extensions')));

//# sourceMappingURL=dist.js.map
