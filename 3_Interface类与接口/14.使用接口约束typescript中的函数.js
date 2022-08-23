var user = {
    name: '后盾人',
    age: 18,
    isLock: false
};
// 使用接口对函数参数和返回值进行类型约束
function isLock(user, lock) {
    user.isLock = lock;
    return user;
}
isLock(user, true);
