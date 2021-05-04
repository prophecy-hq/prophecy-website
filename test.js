var Vector = function (x, y) {
	this.x = x || 0;
	this.y = y || 0;
};
Vector.prototype = {
	constructor: Vector,
	mag: function() { // Magnitude
		return Math.sqrt((this.x * this.x) + (this.y * this.y));
	},
	addVectors: function() {
		for (var i = 0; i < arguments.length; i++) {
			this.x += arguments[i].x;
			this.y += arguments[i].y;
		}
	},
	subtract: function(v) {
		this.x = this.x - v.x;
		this.y = this.y - v.y;
	},
	multiply: function(integer) {
		this.x = this.x * integer;
		this.y = this.y * integer;
	},
	divide: function(integer) {
		this.x = this.x / integer;
		this.y = this.y / integer;
	},
	reciprocal: function() {
		this.x = 1 / this.x;
		this.y = 1 / this.y;
	},
	normalize: function() {
		if (this.mag() !== 0) {
			this.x = this.x / this.mag();
			this.y = this.y / this.mag();
		}
	},
	dot: function(v) { // Dot product
		return (this.x * v.x) + (this.y * v.y);
	},
	scalarProjection: function(p, a, b) { // Point p projected on the line a–b
		var ap = Point.getVector(a, p);
		var ab = Point.getVector(a, b);
		ab.normalize();
		ab.multiply(ap.dot(ab));
		return Vector.addVectors(a, ab);
	}
};
Vector.addVectors = function() {
	var x = 0;
	var y = 0;
	for (var i = 0; i < arguments.length; i++) {
		x += arguments[i].x;
		y += arguments[i].y;
	}
	return new Vector(x, y);
};