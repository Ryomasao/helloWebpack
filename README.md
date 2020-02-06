```
$ yarn upgrade webpack@3.12.0 webpack-dev-server@2.11.1
```

```
$ yarn upgrade webpack webpack-dev-server --latest
```

### 雑記

webpack で widnow オブジェクトの扱い

legacy.js

```js
function globalFunction() {
  console.log("i am global function");
  const h = window;
  h.PageView();
}

window.a = "you do not do like this";
console.log("legacy code was execed");
```

index.js

```js
//  Namedだろうが、全部importだろうが、legacy.jsのトップレベルの処理は実行される
import "./legacy";

// 別モジュールで設定したwindowは見れるっちゃみれる
console.log(window.a); // you do not do like this

// これはNG。トップレベルに書いた関数は、windowオブジェクトのpropsになるが、webpackを通すと、挙動がかわり、globalFunctionはundefinedになる
window.globalFunction();
```
