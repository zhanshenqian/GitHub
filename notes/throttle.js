// 函数节流
function throttle(method, delay, duration) {
	var time = null,
		begin = new Date()
	return function() {
		var context = this,
			args = arguments,
			current = new Date()
		clearTimeout(timer)
		if (current - begin >= duratin) {
			method.apply(context, args);
			begin = current;
		} else {
			timer = setTimeout(function() {
				method.apply(context, args);
			}, delay);
		}
	}
}
// toFixed 保留整理 输出的是字符串类型的， 转换为数字类型为
var a = 12.316145.toFixed(2)
console.log(a)//'12.31'
a=+a
console.log(a)//12.31
a = a | 0
console.log(a)//12
a = ~~a
console.log(a)//12

// 数组合并 apply
var arr1 = [1,2,3,54], arr2 = [5,154,121,21,2,1]
arr1.push.apply(arr1, arr2)