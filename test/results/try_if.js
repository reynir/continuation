(function (_$cont) {
  try {
    (function (_$cont) {
      try {
        if (true) {
          setTimeout(function () {
            try {
              console.log('throw err');
              throw 'Err';
              _$cont();
            } catch (_$err) {
              _$cont(_$err);
            }
          }, 100);
        } else {
          throw 'Else Err';
          _$cont();
        }
      } catch (_$err) {
        _$cont(_$err);
      }
    }(function (_$err) {
      try {
        if (_$err !== undefined)
          return _$cont(_$err);
        console.log('after if');
        _$cont();
      } catch (_$err) {
        _$cont(_$err);
      }
    }));
  } catch (_$err) {
    _$cont(_$err);
  }
}(function (err) {
  if (err !== undefined) {
    console.error(err);
  }
  console.log('Done');
}));
/* Generated by Continuation.js v0.1.3 */