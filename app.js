var express = require('express');
var url = require('url');
var app = express();

app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
	res.render('index');
});

// 测试代码
app.get('/pages/*.html', function(req, res) {
	res.render(url.parse(req.url).pathname.slice(1).replace('html', 'jade'));
})
// 测试代码结束

var server = app.listen(4001, function() {
	console.log('Example app listening at http://127.0.0.1:4001');
});