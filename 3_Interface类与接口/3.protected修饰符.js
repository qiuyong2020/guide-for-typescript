var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var Person = /** @class */ (function () {
        function Person() {
        }
        // protected受保护属性可以在类内部被调用
        Person.prototype.info = function () {
            return this.name + " \u7684\u5E74\u9F84\u662F" + this.age;
        };
        return Person;
    }());
    var User = /** @class */ (function (_super) {
        __extends(User, _super);
        function User(n, a) {
            var _this = 
            // 调用父类的构造函数
            _super.call(this) || this;
            _this.name = n;
            _this.age = a;
            return _this;
        }
        // 父类中protected受保护属性可以在子类内部被调用
        User.prototype.show = function () {
            return this.info();
        };
        return User;
    }(Person));
    var hd = new User('后盾人', 18);
    console.log(hd.show());
}
