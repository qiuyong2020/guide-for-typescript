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
            // private修饰符：定义私有属性，只能在类“Person”中访问，外部和子类都无法访问
            // private site: string = '后盾人网站'
            this.site = '后盾人网站';
        }
        Person.prototype.info = function () {
            return this.name + " \u7684\u5E74\u9F84\u662F" + this.age + "\uFF0CTa \u6765\u81EA\u4E8E" + this.site;
        };
        // protected修饰符：定义受保护属性，能在类“Person”和子类"User"中访问，但外部无法访问
        Person.prototype.getInfo = function () {
            return this.info();
        };
        return Person;
    }());
    var User = /** @class */ (function (_super) {
        __extends(User, _super);
        function User(n, a) {
            var _this = _super.call(this) || this;
            _this.name = n;
            _this.age = a;
            return _this;
        }
        // 子类内部无法访问父类的私有属性
        // protected info(): string {
        //   return `${this.name} 的年龄是${this.age}，Ta 来自于${this.site}`
        // } //非法继承=> Property 'info' is protected in type 'User' but public in type 'Person'.
        User.prototype.info = function () {
            return this.name + " \u7684\u5E74\u9F84\u662F" + this.age + "\uFF0CTa \u6765\u81EA\u4E8E" + this.site;
        };
        // 子类内部可以调用父类的受保护属性
        User.prototype.show = function () {
            return this.getInfo();
        };
        return User;
    }(Person));
    var hd = new User('后盾人', 18);
    console.log(hd.show());
}
