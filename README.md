# Node 9下import/export的丝般顺滑使用


## 前言
 Node 9最激动人心的是提供了在flag模式下使用`ECMAScript Modules`，虽然现在还是`Stability: 1 - Experimental`阶段，但是可以让Noder抛掉babel等工具的束缚，直接在Node环境下愉快地去玩耍`import/export`

如果觉得文字太多，看不下去，可以直接去玩玩demo，地址是[https://github.com/chenshenhai/node-modules-demo](https://github.com/chenshenhai/node-modules-demo)


## Node 9下import/export使用简单须知
- Node 环境必须在 9.0以上
- 不加loader时候，使用`import/export`的文件后缀名必须为`*.mjs`（下面会讲利用Loader Hooks兼容`*.js`后缀文件） 
- 启动必须加上flag `--experimental-modules`
- 文件的`import`和`export`必须严格按照`ECMAScript Modules`语法
- `ECMAScript Modules`和`require()`的cache机制不一样

详细解说文档请到个人博客 [https://github.com/ChenShenhai/blog/issues/24](https://github.com/ChenShenhai/blog/issues/24)