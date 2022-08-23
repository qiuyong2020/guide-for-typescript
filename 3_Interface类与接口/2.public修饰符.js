{
    var User = /** @class */ (function () {
        // 封装为每个实例化对象自身独有的属性
        function User(n, a) {
            this.name = n;
            this.age = a;
        }
        User.prototype.info = function () {
            return this.name + " \u7684\u5E74\u9F84\u662F" + this.age;
        };
        return User;
    }());
    var hd = new User('后盾人', 18);
    var xj = new User('向军', 16);
    // 遍历对象自身的属性，方法在其原型上
    for (var key in xj) {
        if (xj.hasOwnProperty(key)) {
            console.log(xj[key]);
        }
    }
}
