{
    var Axios_1 = /** @class */ (function () {
        function Axios() {
        }
        // 定义静态方法，用来获取静态属性
        Axios.getSite = function () {
            return Axios.site;
        };
        // static修饰符：定义静态属性，只能通过构造函数调用 
        Axios.site = 'houdunren.com';
        return Axios;
    }());
    var instance = new Axios_1();
    // console.log(instance.site)  //Error: Property 'site' does not exist on type 'Axios'.
    console.log(Axios_1.site);
    // console.log(instance.getSite())  //Error
    console.log(Axios_1.getSite());
}
