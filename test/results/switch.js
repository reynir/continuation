var err, text, end;
(function (_$cont) {
  function case_0(_$cont) {
    a = 1;
    _$cont();
  }
  function case_1(_$cont) {
    fs.readFile('e.js', function () {
      err = arguments[0];
      text = arguments[1];
      _$cont();
    });
  }
  function case_2(_$cont) {
    fs.readFile('e.js', function () {
      err = arguments[0];
      text = arguments[1];
      case_3(_$cont);
    });
  }
  function case_3(_$cont) {
    (function (_$cont) {
      if (a) {
        d = 1;
        return _$cont();
        _$cont();
      } else {
        setTimeout(function () {
          _$cont();
        });
      }
    }(function (_$err) {
      if (_$err !== undefined)
        return _$cont(_$err);
      case_4(_$cont);
    }));
  }
  function case_4(_$cont) {
    console.log('stop');
    _$cont();
  }
  switch ('abc') {
  case 'a':
    return case_0(_$cont);
  case 'b':
    return case_1(_$cont);
  case 'c':
    return case_2(_$cont);
  case 'd':
    return case_3(_$cont);
  default:
    return case_4(_$cont);
  }
}(function () {
  end = 'a';
}));
/* Generated by Continuation.js v0.1.3 */