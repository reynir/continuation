var i;
i = 0;
function _$loop_0(_$loop_0__$cont) {
  if (true) {
    setTimeout(function () {
      console.log('hello');
      if (i == 5) {
        return _$loop_0__$cont();
      }
      i++;
      _$loop_0(_$loop_0__$cont);
    }, 200);
  } else {
    _$loop_0__$cont();
  }
}
_$loop_0(function () {
});
/* Generated by Continuation.js v0.1.3 */