{
    // let aLink = document.querySelector('#hd') as HTMLLinkElement
    // aLink.href
    var Hd = /** @class */ (function () {
        // 明确断言el的类型为HTMLDivElement
        function Hd(el) {
            this.el = el;
        }
        Hd.prototype.html = function () {
            return this.el.innerHTML;
        };
        return Hd;
    }());
    // 保证存在div.xj元素，明确断言el的类型为HTMLDivElement
    var el = document.querySelector('.xj');
    var obj = new Hd(el);
    console.log(obj.html());
}
