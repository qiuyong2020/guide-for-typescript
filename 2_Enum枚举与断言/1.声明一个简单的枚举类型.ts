enum SexType {
  BOY,
  GIRL,
  MALE = 6
}
let user = {
  name: '后盾人',
  sex: 1,
}
console.log(SexType.BOY)  //BOY: 0
console.log(SexType.GIRL) //GIRL: 1
console.log(SexType.MALE) //MALE: 6