var fs, path, _$err, totalSize, totalBlockSize;
fs = require('fs');
function calcDirSize(path, callback) {
  var dirSize, dirBlockSize, _$err, files, i, filename, stats, subDirSize, subDirBlockSize;
  dirSize = 0;
  dirBlockSize = 0;
  fs.readdir(path, function () {
    _$err = arguments[0];
    files = arguments[1];
    if (_$err)
      throw _$err;
    i = 0;
    function _$loop_0(_$loop_0__$cont) {
      if (i < files.length) {
        filename = path + '/' + files[i];
        fs.lstat(filename, function () {
          _$err = arguments[0];
          stats = arguments[1];
          if (_$err)
            throw _$err;
          (function (_$cont) {
            if (stats.isDirectory()) {
              calcDirSize(filename, function () {
                _$err = arguments[0];
                subDirSize = arguments[1];
                subDirBlockSize = arguments[2];
                if (_$err)
                  throw _$err;
                dirSize += subDirSize;
                dirBlockSize += subDirBlockSize;
                _$cont();
              });
            } else {
              dirSize += stats.size;
              dirBlockSize += 512 * stats.blocks;
              _$cont();
            }
          }(function (_$err) {
            if (_$err !== undefined)
              return _$cont(_$err);
            i++;
            _$loop_0(_$loop_0__$cont);
          }));
        });
      } else {
        _$loop_0__$cont();
      }
    }
    _$loop_0(function () {
      callback(null, dirSize, dirBlockSize);
    });
  });
}
path = process.argv[2];
if (!path) {
  path = '.';
}
calcDirSize(path, function () {
  _$err = arguments[0];
  totalSize = arguments[1];
  totalBlockSize = arguments[2];
  if (_$err)
    throw _$err;
  console.log('Size:', Math.round(totalSize / 1024), 'KB');
  console.log('Actual Size on Disk:', Math.round(totalBlockSize / 1024), 'KB');
});
/* Generated by Continuation.js v0.1.3 */