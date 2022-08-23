{
	type HOUDUNREN = { name: string, age: number, skill: string }

	// 从 HOUDUNREN 中提取出几个属性，组成一个新类型
	// type PICK<T, U extends keyof T> = { //keyof可以得到泛型T的一个联合类型 name|age|skill
	// 	[P in U]: T[P]   //确保泛型U的类型在泛型T中存在，才能提取类型
	// }
	// {name: string, age: number}
	// type HD = PICK<HOUDUNREN, 'name' | 'age'>

	type HD = Pick<HOUDUNREN, 'name' | 'age'>
	const xj: HD = { name: '后盾人', age: 33 }
}