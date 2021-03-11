function Bar(x) {
	this.x = x;
}

Bar.prototype.get = function get() {
	return this.x;
};
