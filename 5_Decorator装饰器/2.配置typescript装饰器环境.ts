function decorator(target: object) {}

// 装饰器是ts的实验新特性，需`tsc --init`生成 tsconfig.json 配置文件后开启`experimentalDecorators`和`emitDecoratorMetadata`选项，再通过`tsc -w`监测整个项目文件而不是监测某个文件，才能使用它
@decorator
class Person {}
