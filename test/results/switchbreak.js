var val, num;
val = 'a';
num = 1;
(function (_$cont) {
  function case_0(_$cont) {
    if (num == 1) {
      return _$cont();
    }
    case_1(_$cont);
  }
  function case_1(_$cont) {
    setTimeout(function () {
      console.log('default');
      _$cont();
    }, 500);
  }
  switch (val) {
  case 'a':
    return case_0(_$cont);
  default:
    return case_1(_$cont);
  }
}(function () {
}));
/* Generated by Continuation.js v0.1.3 */