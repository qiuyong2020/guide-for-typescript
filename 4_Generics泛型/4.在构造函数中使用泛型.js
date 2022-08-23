{
    var User = /** @class */ (function () {
        // 在构造函数中，使用泛型T动态接收传入值的推断类型
        function User(_user) {
            this._user = _user;
        }
        User.prototype.get = function () {
            return this._user;
        };
        return User;
    }());
    // User类的泛型 T 动态指定为 UserInterface 接口规范，向构造函数中传入的_user参数必须实现 UserInterface 接口
    var obj = new User({ name: '后盾人', age: 12 });
    console.log(obj.get().age); //12
}
