/*
	封装通过ID获取HTML元素
*/
function $(id) {
	return document.getElementById(id);
}

/*
	过滤敏感词
	input：被过滤的字符串
	sensitiveWords：敏感词
	replace：被替换后的词语
*/
function filterWords(input, sensitiveWords, replace) {
	/*if( input.indexOf(sensitiveWords) !== -1 ) {
		input = input.replace(sensitiveWords, replace);
	}*/

	while(input.indexOf(sensitiveWords) !== -1) {
		input = input.replace(sensitiveWords, replace);
	}

	return input;
}

/*
    封装AJAX函数
    type：请求方式，默认值为GET
    url：请求地址
    async：是否异步，默认值为true
    data：网后台传送的数据，数据格式为对象或者字符串，默认值为空
    success：请求成功以后的回调函数
    beforeSend：发送之前执行的回调函数
    complete：ajax执行完毕以后执行的回调函数
    error：请求失败后执行的回调函数
*/
function ajax({ type = 'GET', url, async = true, data = '', beforeSend, success, error, complete }) {
	return new Promise(function (resolve, reject) {
		// 将请求方式强制转换成大写
		type = type.toUpperCase();
		// 创建ajax对象
		if (window.ActiveXObject) {
			var oXhr = new window.ActiveXObject('Microsoft.XMLHTTP');
		} else {
			var oXhr = new XMLHttpRequest();
		}

		// 允许发送cookie
		oXhr.withCredentials = true;

		// 将对象格式的数据转换成字符串
		if (typeof data === 'object') {
			var sData = '';
			for (var sAttr in data) {
				sData += sAttr + '=' + encodeURIComponent(data[sAttr]) + '&';
			}

			data = sData.slice(0, -1);
		}

		// 如果当前请求是GET请求
		if (type === 'GET') {
			url += '?' + data;
		}

		// 设置请求方式、地址、是否异步
		oXhr.open(type, url, async);

		// 监听readyStats状态的改变
		oXhr.onreadystatechange = function () {
			if (oXhr.readyState === 4) {
				if (oXhr.status === 200) {
					success && success(oXhr.responseText);
					resolve(oXhr.responseText);
				} else {
					error && error(oXhr.status, oXhr.statusText);
					reject([oXhr.status, oXhr.statusText]);
				}
				// 执行完成动作的回调函数
				complete && complete();
			}
		};

		beforeSend && beforeSend();

		// 如果是POST请求
		if (type === 'POST') {
			oXhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			// 发送请求
			oXhr.send(data);
		} else {
			// 发送请求
			oXhr.send();
		}
	});
}

/*
	设置CSS
	target：{attr1:val1,attr2:val2...}
*/
function setStyle(obj, target) {
	for(var sAttr in target) {
		obj.style[sAttr] = target[sAttr];
	}
} 
/*
	碰撞检测
*/
function pz(obj1, obj2) {
	if(
			obj1.offsetLeft + obj1.offsetWidth  <= obj2.offsetLeft
		||  obj1.offsetTop  + obj1.offsetHeight <= obj2.offsetTop
		||  obj2.offsetLeft + obj2.offsetWidth  <= obj1.offsetLeft
		||  obj2.offsetTop  + obj2.offsetHeight <= obj1.offsetTop
	) {
		return false;
	} else {
		return true;
	}
}
/*
	创建唯一的值
*/
function createUniqueKey() {
	return new Date().getTime() + Math.random();
}