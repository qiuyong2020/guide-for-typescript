{
    var User = /** @class */ (function () {
        // 接口约束类中构造函数的传入参数
        function User(user) {
            this._info = user;
        }
        Object.defineProperty(User.prototype, "info", {
            // 接口约束访问器的返回值
            get: function () {
                return this._info;
            },
            enumerable: false,
            configurable: true
        });
        return User;
    }());
    var hd = new User({ name: '后盾人', age: 18 });
    console.log(hd.info);
}
