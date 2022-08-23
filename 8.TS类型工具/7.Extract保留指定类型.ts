{
	// 在左边的宽类型T和右边的窄类型U中，只保留右边泛型U的类型
	// type EXTRACT<T, U> = T extends U ? T : never;

	type HOUDUNREN = string | number | boolean

	const hd: Extract<HOUDUNREN, string | number> = '后盾人';
}