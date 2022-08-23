{
	type XIANGJUNDASHU = { name: string, age: number }

	// 将泛型T中所有属性的类型由必选变为可选
	// type PARTIAL<T> = {
	// 	[P in keyof T]?: T[P]
	// }
	const hd: Partial<XIANGJUNDASHU> = { name: '向军' }
}