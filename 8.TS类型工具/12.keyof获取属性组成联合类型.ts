{
	// type HOUDUNREN = keyof string
	// let xj: HOUDUNREN = 'match'

	// type HOUDUNREN = keyof { name: string, age: number }

	// let xj: HOUDUNREN = 'name'


	// function getAttribute<T>(obj: T, key: keyof T): T[keyof T] {
	// 	return obj[key]
	// }

	// const user = { name: '后盾人', age: 18 }
	// getAttribute(user, 'name')

	// 使用 keyof 获取属性名，确保对象(T)中存在待查找的属性(D)
	function getAttribute<T, D extends keyof T>(obj: T, key: D): T[D] {
		return obj[key]
	}

	const user = { name: '后盾人', age: 18 }
	const attr = getAttribute(user, 'age')  //18

	// 使用 keyof 获取基本类型对象(String, Number...)的属性
	getAttribute('abc', 'includes')  //String['includes'] => string.includes()
}