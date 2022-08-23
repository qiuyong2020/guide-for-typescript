{
    // 如果多次声明同一个接口，后面的声明不会覆盖原接口的规范，而是对所有声明进行合并 => 在原接口的基础上增加规范
    var Player = /** @class */ (function () {
        function Player() {
        }
        Player.prototype.move = function () {
            throw new Error('Method not implemented.');
        };
        Player.prototype.end = function () {
            throw new Error('Method not implemented.');
        };
        return Player;
    }());
}
