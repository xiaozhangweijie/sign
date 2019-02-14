var express = require('express');
var app = express();
// get post all
// 路由匹配 = 请求方式 + 路径 1、客户端的请求方式===服务器方法 + 客户端路径===服务器路径
// ck是路由匹配时执行的回调函数，被称之为处理器函数
app.get('/src', function (req, res) {
    // req.params
    // console.log(req.params); // 获取路由路径参数 :
    // console.log(req.query); // 地址栏参数 ?
    // req 请求对象
    // var obj = require('url').parse(req.url, true);
    // console.log(obj.pathname); === req.path
    // console.log(obj.query); === req.query
    // console.log(req.path); ★
    // console.log(req.query); ★
    // console.log(req.body);
    // console.log(req.method);
    // console.log(req.headers);
    // res.statusCode = 404;
    // res.status(500).end('error'); ★
    // res.setHeader('content-type', 'text/html');
    // res.writeHead();
    // res.header('content-type', 'text/plain');
    // res.header('content-length', 3);
    // res.header({
    //     'content-type': 'text/html',
    //     'content-length': 4
    // });
    // res.write('www');
    // res.end();
    // res.download('./package.json'); // 提示下载文件。
    // res.end()   终结响应处理流程。
    // res.json()  发送一个 JSON 格式的响应。
    // res.header('content-type', 'application/json');
    // res.end(JSON.stringify({code: 1, msg: '成功'}));
    // res.end('hello');
    // res.redirect()  重定向请求。
    // res.json({msg: '你好'}); // res.header + res.end()
    // res.writeHead('location')
    // res.status(302);
    // res.header('Location', '/lib');
    // res.end();
    // res.redirect('/lib');
    // res.render()    渲染视图模板。
    // res.send()  发送各种类型的响应。
    // res.header('content-type', 'text/html;charset=utf-8');
    // res.end('你好');
    // res.send(404);
    // res.sendStatus(403); 设置响应状态代码，并将其以字符串形式作为响应体的一部分发送。
    // res.status(404).send('页面不存在');
    // res.send(require('fs').readFileSync('./form.html', 'utf-8'));
    res.sendFile(require('path').resolve('form.html')); // 绝对路径
});
app.get('/libs', function (req, res, next) {
    // res.end('/lib1');
    // console.log('lib1');
    // next('route'); // 移交控制权
    // next res.send
    next();
    console.log(1);
    res.send('hello');
}, function (req, res) {
    console.log(0);
    res.end('lib2');
});
app.get('/lib', function (req, res, next) {
    res.sendFile(__dirname + '/form.html');
});
app.get('/style.css', function (req, res) {
    res.sendFile(__dirname + '/style.css');
});
// next用于移交控制权
// next() 将控制权交给下一个处理器函数
// next('route')跳过当前所有处理器函数，之间将控制权交给下一个路由（同名）
// http.createServer(function (req, res) {})
app.listen(8080);
// Cannot set headers after they are sent to the client
// 他们(响应内容)被发送到客户端之后就不能再设置响应头信息

// res.download()  提示下载文件。
// res.end()   终结响应处理流程。
// res.json()  发送一个 JSON 格式的响应。☆
// res.jsonp() 发送一个支持 JSONP 的 JSON 格式的响应。
// res.redirect()  重定向请求。
// res.render()    渲染视图模板。☆☆
// res.send()  发送各种类型的响应。☆
// res.sendFile    以八位字节流的形式发送文件。☆
// res.sendStatus()    设置响应状态代码，并将其以字符串形式作为响应体的一部分发送。

// next
// next函数主要负责将控制权交给下一个中间件，如果当前中间件没有终结请求，并且next没有被调用，那么请求将被挂起，后边定义的中间件将得不到被执行的机会
// next函数主要是用来确保所有注册的中间件被一个接一个的执行，如果我们定义的中间件终结了本次请求，那就不应该再调用next函数，
// next end