var User = /** @class */ (function () {
    // constructor构造函数可以调用类内部的私有方法initName进行属性的初始化
    function User(name) {
        this.name = name;
        this.name = this.initName(name);
    }
    User.prototype.initName = function (name) {
        return name + "-houdunren.com";
    };
    return User;
}());
var hd = new User('后盾人');
console.log(hd.name);
