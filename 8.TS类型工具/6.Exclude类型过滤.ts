// 在宽类型T中，过滤掉窄类型U（确保U是T的子类型），过滤之后的类型组成一个新类型
// type EXCLUDE<T, U> = T extends U ? never : T

// 窄类型
type XIANGJUNDASHU = string | boolean
// 宽类型
type HOUDUNREN = string | number | boolean

const hd: Exclude<HOUDUNREN, XIANGJUNDASHU> = 100;

