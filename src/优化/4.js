class Bar {
	constructor(x) {
		this.x = x;
	}
	getX(){
		return this.x
	}
}


const foo = new Bar(true)

foo.getX();

Object.setPrototypeOf(foo, null)

foo.getX();

// const quz = new Bar(false)




// const x = foo.getX ()

// // 实际上是
// const $getX = foo.getX;
// const x = $getX.call(foo)

