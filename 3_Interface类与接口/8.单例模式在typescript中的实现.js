var Axios = /** @class */ (function () {
    // 私有化构造函数，在外部无法通过new关键字调用它进行实例化
    function Axios() {
        // console.log('构造函数')
    }
    // 使用静态方法生成实例
    Axios.make = function () {
        if (Axios.instance == null) {
            console.log('创建 axios 实例');
            Axios.instance = new Axios();
        }
        return Axios.instance;
    };
    // 定义静态属性，所有实例共用一份
    Axios.instance = null;
    return Axios;
}());
// new Axios() //Error: Constructor of class 'Axios' is private and only accessible within the class declaration.
// 单例模式：多次调用Axios.make()，但new Axios()创建过程只会实例化一次
var instance = Axios.make();
var instance2 = Axios.make();
var instance3 = Axios.make();
var instance4 = Axios.make();
