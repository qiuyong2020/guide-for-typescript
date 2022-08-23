var SexType;
(function (SexType) {
    SexType[SexType["BOY"] = 0] = "BOY";
    SexType[SexType["GIRL"] = 1] = "GIRL";
    SexType[SexType["MALE"] = 6] = "MALE";
})(SexType || (SexType = {}));
var user = {
    name: '后盾人',
    sex: 1
};
console.log(SexType.BOY); //BOY: 0
console.log(SexType.GIRL); //GIRL: 1
console.log(SexType.MALE); //MALE: 6
