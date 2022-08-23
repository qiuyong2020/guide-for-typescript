var Axios = /** @class */ (function () {
    function Axios(site) {
        // readonly关键字：定义只读属性，限定它是无法修改的
        this.site = 'https://www.houdunren.com/api';
        // 有就使用传入值，为undefined就使用默认值site
        this.site = site || this.site;
    }
    Axios.prototype.get = function (url) {
        console.log("\u4F60\u8BF7\u6C42\u7684\u662F" + this.site + "/" + url);
        return [];
    };
    return Axios;
}());
var instance = new Axios();
console.log(instance.site);
