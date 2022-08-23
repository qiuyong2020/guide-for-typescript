{
	// 把b对象的所有属性添加到a对象中
	// function merge<T, U>(a: T & U, b: U): T & U {
	// 	for (const key in b) {
	// 		a[key] = b[key] as any
	// 	}

	// 	return a;
	// }
	
	// 把一个类型添加到另一个类型中
	type HD = ('a' | 'b') & ('a') //a 

	type HD2 = ('a' | 'b') & ('a' | string) //a | b
}