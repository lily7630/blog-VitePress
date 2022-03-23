## 原生 javascript 实现 call apply 方法

### call 方法

```javascript
// ES5
Function.prototype._call = function(obj) {
  // 判断是否为 null 或者 undefined，同时考虑传递参数不是对象情况
  obj = obj ? Object(obj) : window;
  var args = [];

  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']');
  }

  obj.fn = this;
  var result = eval('obj.fn(' + args + ')');
  delete obj.fn;
  return result;
}

// ES6
Function.prototype._call = function(obj) {
  // 判断是否为 null 或者 undefined，同时考虑传递参数不是对象情况
  obj = obj ? Object(obj) : window;
  obj.fn = this;

  let args = [...arguments].slice(1);
  let result = obj.fn(...args);

  delete obj.fn;
  return result;
}
```

### apply 方法

```javascript
// ES5
Function.prototype._apply = function(obj, arr) {
  // 判断是否为 null 或者 undefined，同时考虑传递参数不是对象情况
  obj = obj ? Object(obj) : window;
  obj.fn = this;

  var result;
  if (!arr) {
    result = obj.fn();
  } else {
    var args = [];

    for (var i = 0; i < arr.length; i++) {
      args.push('arr['+ i +']');
    }

    result = eval('obj.fn('+ args +')');
  }

  delete obj.fn;
  return result;
}

// ES6
Function.prototype._apply = function(obj, arr) {
  // 判断是否为 null 或者 undefined，同时考虑传递参数不是对象情况
  obj = obj ? Object(obj) : window;
  obj.fn = this;

  let result;
  if (!arr) {
    result = obj.fn();
  } else {
    result = obj.fn(...arr);
  }

  delete obj.fn;
  return result;
}
```



