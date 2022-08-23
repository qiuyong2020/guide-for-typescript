{
	// 指定属性名以及属性的可选类型，批量地定义一个新类型
	type RECORD<K extends string | number | symbol, V> = {
		[P in K]: V
	}
	// {
	// 	name:string | number,
	// 	age:string | number
	// }
	// type HD = RECORD<'name' | 'age', string | number>

	// 不限制属性名，只要是字符串，可以是任意属性
	type HD = Record<string, string | number>
	const xj: HD = { name: "后盾人", age: 18, address: "http://XXX.com" }
}