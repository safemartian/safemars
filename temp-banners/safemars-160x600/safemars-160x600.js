(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"safemars_160x600_atlas_", frames: [[230,538,228,80],[0,586,228,80],[0,504,228,80],[262,456,228,80],[230,620,115,150],[309,152,145,150],[262,304,140,150],[0,302,260,200],[0,0,307,300],[309,0,159,150]]}
];


// symbols:



(lib.cta12over = function() {
	this.initialize(ss["safemars_160x600_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cta12 = function() {
	this.initialize(ss["safemars_160x600_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cta2over = function() {
	this.initialize(ss["safemars_160x600_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cta2 = function() {
	this.initialize(ss["safemars_160x600_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dollar = function() {
	this.initialize(ss["safemars_160x600_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.flame = function() {
	this.initialize(ss["safemars_160x600_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.helmet = function() {
	this.initialize(ss["safemars_160x600_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.logo3 = function() {
	this.initialize(ss["safemars_160x600_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.planet = function() {
	this.initialize(ss["safemars_160x600_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.stats = function() {
	this.initialize(ss["safemars_160x600_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.towbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cta2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.1991,1.1993);

	this.instance_1 = new lib.cta2over();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.1991,1.1993);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A1WFHIAAgFIAAgIIAArLQgChUBQAGMAorAAAQA1gCgCA1IAACaIABgNQgGEbi9DjQjADolPAZI8XAAIgOABQixAAgFiag");
	this.shape.setTransform(136.6962,48.0689);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273.4,96.1);


(lib.text_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFBHIgFgDIgDgFQgCgDAAgDQAAgDACgDIADgFIAFgDIAFgBIAHABIAFADIADAFIABAGIgBAGIgDAFIgFADIgHABIgFgBgAgLAbIgDhiIAdAAIgDBig");
	this.shape.setTransform(190.125,39.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYA0QgGgDgFgEQgFgFgCgIQgDgHAAgLIAAhDIAdAAIAABEIABAHIADAFQACACADABIAGABQAGAAAFgDQAFgCACgFIAAhKIAdAAIAABpIgbAAIgBgLQgFAGgHADQgGAEgKAAQgHAAgHgCg");
	this.shape_1.setTransform(181.625,41.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAzQgJgEgHgIQgGgHgDgKQgEgJAAgMIAAgBQAAgMAEgJQADgKAGgHQAHgIAIgEQAKgEALAAQAMAAAJAEQAJAEAHAIQAHAHADAKQADAJAAAMIAAABQAAAMgDAJQgDAKgHAHQgGAIgKAEQgJAEgMAAQgLAAgJgEgAgJgcQgEACgDAEQgCAEgCAGQgBAGAAAGIAAABQAAAGABAGQACAGACAEQADAEAEADQAEACAFAAQAGAAAEgCQAEgDADgEQACgEABgGQACgGAAgGIAAgBQAAgGgCgGQgBgGgCgEQgDgEgEgCQgEgDgGAAQgFAAgEADg");
	this.shape_2.setTransform(170.3,41.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdBKIgDAAIgDgBIgDAAIAAgWIADAAIACAAIAHgBIAFgCIADgDIADgGIADgHIglhpIAeAAIATBCIAUhCIAeAAIgqB4IgEAJQgCAFgDAEQgEAEgGADQgGACgIAAIgEAAg");
	this.shape_3.setTransform(159.525,43.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARA2IAAhDIgBgIIgDgFIgGgDIgHgBQgFAAgFADQgEADgDAEIAABKIgcAAIAAhpIAbAAIAAAMQAGgHAIgDQAHgEAJAAQAIAAAGACQAGACAEAFQAFAFACAIQADAHgBAMIAABCg");
	this.shape_4.setTransform(143.7,41.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNBKIAAhpIAbAAIAABpgAgGgtIgEgDIgEgEIgBgGQAAgHAFgEQAEgEAGAAIAHABIAEADIAEAFIABAGIgBAGIgEAEIgEADIgHABIgGgBg");
	this.shape_5.setTransform(135.4,39.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARA2IAAhDIgBgIIgDgFIgGgDIgGgBQgGAAgFADQgEADgCAEIAABKIgdAAIAAhpIAbAAIAAAMQAGgHAIgDQAHgEAJAAQAIAAAFACQAHACAFAFQAEAFACAIQADAHAAAMIAABCg");
	this.shape_6.setTransform(121.95,41.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYA0QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgIAEgHQACgGAHgEQAFgEAKgCQAJgDALAAIAMAAIAAgGQABgHgEgFQgEgEgHAAQgHAAgEADQgEAEAAAGIgcAAQAAgHACgGQAEgGAFgFQAHgEAIgDQAIgDAKAAQAIAAAJACQAHADAGAFQAFAEAEAHQADAHAAAJIAAAsIAAAIIABAHIABAFIACAEIAAACIgcAAIgEgKQgEAFgGADQgGAEgJAAQgIAAgGgDgAgGAGIgHADIgDAGIgBAGQgBAFAEAEQAEADAGAAIAGgBIAGgCIADgDIADgEIAAgSIgLAAIgJABg");
	this.shape_7.setTransform(110.9,41.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNBKIAAhpIAbAAIAABpgAgFgtIgGgDIgCgEIgCgGQAAgHAEgEQAEgEAHAAIAHABIAFADIADAFIABAGIgBAGIgDAEIgFADIgHABIgFgBg");
	this.shape_8.setTransform(102.85,39.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AACBBQgFgCgEgDQgEgEgCgGQgCgGAAgIIAAg3IgQAAIAAgVIAQAAIAAgaIAbAAIAAAaIASAAIAAAVIgSAAIAAA0IABAFQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAAAQABABAAAAQABAAABAAIAEAAIAFAAIADAAIAAAVIgIACIgJABQgHAAgFgCg");
	this.shape_9.setTransform(96.6,40.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdA2IAAhpIAbAAIABANQADgHAFgEQAGgEAIAAIAFABIAEAAIgBAcIgFgBIgFAAQgIAAgFADQgFACgCAGIAABEg");
	this.shape_10.setTransform(90.025,41.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYA0QgHgCgEgEQgFgEgDgGQgDgGAAgHQAAgIADgHQAEgGAFgEQAHgEAJgCQAJgDALAAIANAAIAAgGQAAgHgEgFQgEgEgHAAQgHAAgEADQgEAEgBAGIgcAAQAAgHADgGQAEgGAFgFQAHgEAIgDQAIgDAJAAQAKAAAIACQAHADAGAFQAFAEAEAHQADAHAAAJIAAAsIAAAIIABAHIABAFIACAEIAAACIgdAAIgCgKQgFAFgGADQgFAEgKAAQgHAAgHgDgAgGAGIgHADIgEAGIAAAGQAAAFADAEQAEADAGAAIAGgBIAGgCIADgDIAEgEIAAgSIgMAAIgJABg");
	this.shape_11.setTransform(80.5,41.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAvA2IAAhDIgBgIQgBgEgCgBIgFgDIgHgBQgGAAgFADQgEAEgCAFIAAABIAAABIAABGIgbAAIAAhCIgBgJIgEgFIgFgDIgGgBQgHAAgEADQgEACgDAFIAABKIgcAAIAAhpIAbAAIAAAMQAGgHAHgDQAIgEAKAAQAJAAAIAEQAGAEAEAIQAFgHAIgFQAIgEALAAQAHAAAHACQAGACAEAFQAFAFACAIQADAHAAALIAABDg");
	this.shape_12.setTransform(66.425,41.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRAzQgJgEgHgHQgHgHgEgJQgDgKAAgKIAAgEQAAgLADgKQAEgKAGgIQAHgHAJgEQAJgEAKAAQAMAAAJAEQAIAEAGAGQAGAHADAKQADAJAAAMIAAALIhDAAIADAJQADAFADADQADADAFABQADACAFAAQAIAAAHgDQAGgDAFgGIANAQIgFAHIgJAGIgNAEQgGACgHAAQgMAAgKgEgAgGgdQgDABgCADQgDADgCAEIgCAJIAmAAIAAgCIgBgIQgBgEgDgCQgBgDgFgCQgDgBgFAAQgEAAgDACg");
	this.shape_13.setTransform(173.05,15.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AARBLIAAhDIgBgIIgDgFIgFgDIgHgBQgGAAgEADQgFADgCADIAABLIgdAAIAAiVIAdAAIAAA4QAFgHAHgDQAGgDAJAAQAIAAAGABQAHADAEAFQAFAFACAHQADAJAAAJIAABDg");
	this.shape_14.setTransform(161.825,13.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AACBBQgFgCgEgDQgEgEgCgGQgCgGAAgIIAAg3IgQAAIAAgVIAQAAIAAgaIAbAAIAAAaIASAAIAAAVIgSAAIAAA0IABAFQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAAAQABABAAAAQABAAABAAIAEAAIAFAAIADAAIAAAVIgIACIgJABQgHAAgFgCg");
	this.shape_15.setTransform(152.65,14.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgQAzQgLgEgGgHQgHgHgDgJQgEgKAAgKIAAgEQAAgLAEgKQADgKAGgIQAHgHAJgEQAJgEALAAQALAAAIAEQAJAEAGAGQAGAHADAKQADAJAAAMIAAALIhCAAIADAJQACAFADADQADADAEABQAEACAGAAQAHAAAGgDQAHgDAFgGIAOAQIgHAHIgJAGIgLAEQgHACgIAAQgLAAgJgEgAgGgdQgDABgDADQgCADgCAEIgCAJIAmAAIAAgCIgBgIQgBgEgCgCQgDgDgDgCQgEgBgEAAQgEAAgEACg");
	this.shape_16.setTransform(138.9,15.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSA0QgJgEgFgFQgGgFgDgGQgDgGAAgHIAaAAIACAHQACADADACIAGADIAGABQAIAAAFgDQADgDAAgFIgBgFIgCgDIgIgDIgJgDIgPgEQgHgDgFgDQgFgEgDgFQgCgFAAgHQAAgHACgGQADgGAGgEQAFgFAIgCQAIgDAIAAQAKAAAJADQAIACAGAFQAGAEADAHQACAGAAAHIgcAAQAAgGgDgEQgFgEgIAAQgGAAgEADQgDAEAAAFIABAEIADADIAGADIAIACIAQAEQAIADAEADQAGAEADAFQADAGAAAHQAAAHgDAGQgDAGgGAFQgGAEgIACQgJADgKAAQgJAAgJgDg");
	this.shape_17.setTransform(128.05,15.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYA0QgGgCgFgEQgGgEgCgGQgDgGAAgHQAAgIAEgHQACgGAHgEQAFgEAKgCQAJgDALAAIAMAAIAAgGQABgHgEgFQgEgEgHAAQgHAAgEADQgFAEABAGIgcAAQAAgHADgGQADgGAFgFQAGgEAJgDQAIgDAKAAQAIAAAJACQAHADAGAFQAFAEAEAHQADAHAAAJIAAAsIAAAIIABAHIABAFIACAEIAAACIgcAAIgEgKQgEAFgGADQgFAEgKAAQgIAAgGgDgAgFAGIgIADIgDAGIgBAGQAAAFADAEQAEADAGAAIAGgBIAFgCIAFgDIACgEIAAgSIgLAAIgIABg");
	this.shape_18.setTransform(117.55,15.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRAzQgKgEgGgHQgHgHgEgJQgDgKAAgKIAAgEQAAgLADgKQAEgKAGgIQAHgHAJgEQAJgEAKAAQAMAAAJAEQAIAEAGAGQAGAHADAKQADAJAAAMIAAALIhDAAIADAJQACAFAEADQADADAFABQADACAGAAQAHAAAGgDQAHgDAFgGIANAQIgFAHIgJAGIgNAEQgGACgHAAQgMAAgKgEgAgGgdQgDABgCADQgDADgCAEIgCAJIAmAAIAAgCIgBgIQgBgEgCgCQgCgDgFgCQgDgBgFAAQgEAAgDACg");
	this.shape_19.setTransform(106.8,15.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNBLIAAiVIAbAAIAACVg");
	this.shape_20.setTransform(98.6,13.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQAzQgKgEgHgHQgHgHgDgJQgEgKAAgKIAAgEQAAgLAEgKQADgKAHgIQAGgHAJgEQAJgEALAAQALAAAIAEQAJAEAGAGQAGAHADAKQADAJAAAMIAAALIhDAAIAEAJQACAFADADQADADAEABQAEACAFAAQAIAAAHgDQAGgDAFgGIAOAQIgGAHIgKAGIgLAEQgHACgIAAQgLAAgJgEgAgGgdQgEABgCADQgDADgBAEIgCAJIAmAAIAAgCIgBgIQgBgEgDgCQgCgDgDgCQgEgBgEAAQgEAAgEACg");
	this.shape_21.setTransform(90.55,15.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAYBHIgag0IgXAAIAAA0IgeAAIAAiNIA1AAQAMAAAJACQAKAEAHAFQAHAFADAIQAEAIAAALQAAAHgBAHQgCAGgEAFQgDADgFAFQgFADgGACIAfA7IAAABgAgZgEIAXAAIAKgBIAHgEQADgDABgEQACgEAAgFQAAgKgGgGQgFgFgMAAIgXAAg");
	this.shape_22.setTransform(79,13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_Layer_1, null, null);


(lib.stats_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.stats();
	this.instance.parent = this;
	this.instance.setTransform(-8,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.stats_1, new cjs.Rectangle(-8,0,95.4,90), null);


(lib.Scene_1_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#020F57","#2A122D"],[0.012,1],-4.2,-21.6,0,-4.2,-21.6,279.1).s().p("EgNxAvsMAAAhfXIbkAAMAAABfXg");
	this.shape.setTransform(84.25,302.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(335));

}).prototype = p = new cjs.MovieClip();


(lib.rocketship_tail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tail
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AgpgJQAvhFAqgVQAGASATAbQAUATAUANQgeAkhKAjIh5AzQAXgeAwhPg");
	this.shape.setTransform(11.275,36.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF4D00").s().p("AgmgJQAshAAngUQADARASAbQAUAUATAKQgbAghFAhQhQAighAPQAVgeAthKg");
	this.shape_1.setTransform(11.975,35.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgjgJQApg7AlgTQgCAPASAbQAVAUASAJQgZAchAAfIhqAtQAVgbAphGg");
	this.shape_2.setTransform(12.65,35.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF8000").s().p("AgggIQAmg3AhgSQgFAOASAbQAVAUARAGQgWAZg7AdIhiAqQATgZAmhBg");
	this.shape_3.setTransform(13.35,34.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgdgHQAjgzAfgRQgJAMAQAcQAWAUAQAEQgTAVg3AbIhZAnQARgYAjg7g");
	this.shape_4.setTransform(14.025,33.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.rocketship_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhhC5QgDgFANgXQANgZAAgGQgNAFgKAAQgRAAgVgYQgTgaADgPQAIgOAAgIQgFAAgcAIQgYAHgFgEQgBgWBZhiQAqgwALgEQAJgFAzgDQgzA1gRAjQAMgJAignQAogqAmgVQAngWAjgJQA1gJAaAJQAFAagTA1QgOAigdAgQgcAiguAgIg4AmQAXgGAfgSIArgcQgKAzgHAJQgGAIg3AgQhsBDgYAAIgCAAg");
	this.shape.setTransform(34.0428,18.4812);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9));

}).prototype = p = new cjs.MovieClip();


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.logo3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.4313,0.4312);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,112.2,86.3), null);


(lib.helmet_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.dollar();
	this.instance.parent = this;
	this.instance.setTransform(-7,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.helmet_1, new cjs.Rectangle(-7,0,46,60), null);


(lib.fombtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.cta12();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.1991,1.1994);

	this.instance_1 = new lib.cta12over();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.1991,1.1994);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A1WFHIAAgFIAAgIIAArLQgChUBQAGMAorAAAQA1gCgCA1IAACaIABgNQgGEbi9DjQjADolPAZI8XAAIgOABQixAAgFiag");
	this.shape.setTransform(136.6962,48.0689);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273.4,96.1);


(lib.flame_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.flame();
	this.instance.parent = this;
	this.instance.setTransform(-13,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.flame_1, new cjs.Rectangle(-13,0,58,60), null);


(lib.dollar_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.helmet();
	this.instance.parent = this;
	this.instance.setTransform(-1,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dollar_1, new cjs.Rectangle(-1,0,84,90), null);


(lib.cta3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A5vVVMAAAgqpMAzfAAAMAAAAqpg");
	this.shape.setTransform(164.775,136.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,329.6,273);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.text_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(125.2,28.6,1,1,0,0,0,125.2,28.6);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(55.7,0,139.3,54), null);


(lib.Scene_1_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.instance = new lib.text();
	this.instance.parent = this;
	this.instance.setTransform(80.05,166.5,1,1,0,0,0,125.4,14);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(142).to({_off:false},0).to({alpha:1},24).wait(124).to({alpha:0},24).wait(21));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(80.1,281.3,1.2868,1.2868,0,0,0,56.1,43.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({regY:43.1,scaleX:1,scaleY:1,x:80.05,y:79.1},23,cjs.Ease.quartInOut).wait(264).to({regY:43.3,scaleX:1.2868,scaleY:1.2868,x:80.1,y:281.4},24,cjs.Ease.quartInOut).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cta_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cta_3
	this.cta3 = new lib.cta3();
	this.cta3.name = "cta3";
	this.cta3.parent = this;
	this.cta3.setTransform(79.2,304.85,0.5664,2.3399,0,0,0,164.8,136.3);
	new cjs.ButtonHelper(this.cta3, 0, 1, 2, false, new lib.cta3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cta3).wait(335));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cta_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cta_2
	this.cta2 = new lib.towbtn();
	this.cta2.name = "cta2";
	this.cta2.parent = this;
	this.cta2.setTransform(21.9,618.05,0.4256,0.4256,0,0,0,0.1,0.1);
	this.cta2._off = true;
	new cjs.ButtonHelper(this.cta2, 0, 1, 2, false, new lib.towbtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cta2).wait(142).to({_off:false},0).to({y:534.85},24,cjs.Ease.quartInOut).wait(140).to({y:646.85},24,cjs.Ease.quartInOut).wait(5));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cta_1
	this.cta1 = new lib.fombtn();
	this.cta1.name = "cta1";
	this.cta1.parent = this;
	this.cta1.setTransform(80.05,638.45,0.4256,0.4256,0,0,0,136.7,48.1);
	this.cta1._off = true;
	new cjs.ButtonHelper(this.cta1, 0, 1, 2, false, new lib.fombtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cta1).wait(142).to({_off:false},0).to({y:450.75},24,cjs.Ease.quartInOut).wait(140).to({y:667.25},24,cjs.Ease.quartInOut).wait(5));

}).prototype = p = new cjs.MovieClip();


(lib.rocketship = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// tail_obj_
	this.tail = new lib.rocketship_tail();
	this.tail.name = "tail";
	this.tail.parent = this;
	this.tail.setTransform(11.2,36.3,1,1,0,0,0,11.2,36.3);
	this.tail.depth = 0;
	this.tail.isAttachedToCamera = 0
	this.tail.isAttachedToMask = 0
	this.tail.layerDepth = 0
	this.tail.layerIndex = 0
	this.tail.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.tail).wait(9));

	// base_obj_
	this.base = new lib.rocketship_base();
	this.base.name = "base";
	this.base.parent = this;
	this.base.setTransform(34,18.4,1,1,0,0,0,34,18.4);
	this.base.depth = 0;
	this.base.isAttachedToCamera = 0
	this.base.isAttachedToMask = 0
	this.base.layerDepth = 0
	this.base.layerIndex = 1
	this.base.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.base).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.7,46.4);


(lib.planet_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{helmet:0,stats:48,flame:96,dollar:167,"dollar":190,"stats":0,"flame":48,"dollar":96,"helmet":167,"helmet":190,"dollar":0,"helmet":48,"stats":96,"flame":167,"flame":190,"flame":0,dolar:48,"helmet":96,"stats":167,"stats":190});

	// middle
	this.instance = new lib.helmet_1();
	this.instance.parent = this;
	this.instance.setTransform(63.55,72.6,1.5087,1.5089,0,0,0,16,13.6);

	this.instance_1 = new lib.stats_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.65,97.35,1.0094,1.0094,0,0,0,39.4,45);
	this.instance_1._off = true;

	this.instance_2 = new lib.flame_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.5,72.75,1.5056,1.5087,0,0,0,16.1,13.7);
	this.instance_2._off = true;

	this.instance_3 = new lib.dollar_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(62,97.25,1.0025,1.0035,0,0,0,39.4,45);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({scaleX:1.0058,scaleY:1.0059,x:163.3,y:60.05},24,cjs.Ease.quartInOut).to({_off:true,regX:39.4,regY:45,scaleX:1.0094,scaleY:1.0094,x:62.65,y:97.35},1).wait(143));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},1).wait(23).to({scaleX:0.6725,scaleY:0.673,x:162.5,y:76.3},24,cjs.Ease.quartInOut).to({_off:true,regX:16.1,regY:13.7,scaleX:1.5056,scaleY:1.5087,x:63.5,y:72.75},1).wait(95));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95).to({_off:false},1).wait(23).to({scaleX:1.0037,scaleY:1.0058,x:163.75,y:60.15},24,cjs.Ease.quartInOut).wait(23).to({_off:true,regX:39.4,regY:45,scaleX:1.0025,scaleY:1.0035,x:62,y:97.25},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(166).to({_off:false},1).to({regX:39.3,regY:44.9,scaleX:0.6606,scaleY:0.6606,x:163.15,y:76.75},23,cjs.Ease.quartInOut).wait(1));

	// left
	this.stats = new lib.stats_1();
	this.stats.name = "stats";
	this.stats.parent = this;
	this.stats.setTransform(-40.35,76.75,0.6606,0.6606,0,0,0,39.3,44.9);

	this.instance_4 = new lib.stats_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-40.35,76.75,0.6606,0.6606,0,0,0,39.3,44.9);
	this.instance_4._off = true;

	this.instance_5 = new lib.flame_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-40,60.15,1.0037,1.0058,0,0,0,16.1,13.7);
	this.instance_5._off = true;

	this.instance_6 = new lib.dollar_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-40.95,76.45,0.6684,0.669,0,0,0,39.4,45);
	this.instance_6._off = true;

	this.instance_7 = new lib.helmet_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-40.4,60.05,1.0048,1.0059,0,0,0,16,13.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.stats).to({_off:true},23).wait(168));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},23).to({regX:39.4,regY:45,scaleX:1.0094,scaleY:1.0094,x:62.65,y:97.35},24,cjs.Ease.quartInOut).to({_off:true,regX:16.1,regY:13.7,scaleX:1.0037,scaleY:1.0058,x:-40,y:60.15},1).wait(143));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47).to({_off:false},1).wait(23).to({scaleX:1.5056,scaleY:1.5087,x:63.5,y:72.75},24,cjs.Ease.quartInOut).to({_off:true,regX:39.4,regY:45,scaleX:0.6684,scaleY:0.669,x:-40.95,y:76.45},1).wait(95));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(95).to({_off:false},1).wait(23).to({scaleX:1.0025,scaleY:1.0035,x:62,y:97.25},24,cjs.Ease.quartInOut).wait(23).to({_off:true,regX:16,regY:13.6,scaleX:1.0048,scaleY:1.0059,x:-40.4,y:60.05},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(166).to({_off:false},1).to({scaleX:1.5087,scaleY:1.5089,x:63.55,y:72.6},23,cjs.Ease.quartInOut).wait(1));

	// planet
	this.instance_8 = new lib.planet();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-3,0,0.4285,0.4285);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(191));

	// right
	this.instance_9 = new lib.dollar_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(163.15,76.75,0.6606,0.6606,0,0,0,39.3,44.9);

	this.instance_10 = new lib.helmet_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(163.3,60.05,1.0058,1.0059,0,0,0,16,13.6);
	this.instance_10._off = true;

	this.instance_11 = new lib.stats_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(162.5,76.3,0.6725,0.673,0,0,0,39.4,45);
	this.instance_11._off = true;

	this.instance_12 = new lib.flame_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(163.75,60.15,1.0037,1.0058,0,0,0,16.1,13.7);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(23).to({regX:39.4,regY:45,scaleX:0.5572,scaleY:0.5575,x:63.55,y:50.15},24,cjs.Ease.quartInOut).to({_off:true,regX:16,regY:13.6,scaleX:1.0058,scaleY:1.0059,x:163.3,y:60.05},1).wait(143));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(47).to({_off:false},1).wait(23).to({regX:16.1,scaleX:0.8378,scaleY:0.8383,x:63.55,y:36.45},24,cjs.Ease.quartInOut).to({_off:true,regX:39.4,regY:45,scaleX:0.6725,scaleY:0.673,x:162.5,y:76.3},1).wait(95));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(95).to({_off:false},1).wait(23).to({regY:45.1,scaleX:0.5604,scaleY:0.5608,x:61.65,y:50.05},24,cjs.Ease.quartInOut).wait(23).to({_off:true,regX:16.1,regY:13.7,scaleX:1.0037,scaleY:1.0058,x:163.75,y:60.15},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(166).to({_off:false},1).to({scaleX:0.8371,scaleY:0.8382,x:64.4,y:36.55},23,cjs.Ease.quartInOut).wait(1));

	// back
	this.instance_13 = new lib.flame_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(64.4,36.55,0.8371,0.8382,0,0,0,16.1,13.7);

	this.instance_14 = new lib.dollar_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(63.55,50.15,0.5572,0.5575,0,0,0,39.4,45);
	this.instance_14._off = true;

	this.instance_15 = new lib.helmet_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(63.55,36.45,0.8378,0.8383,0,0,0,16.1,13.6);
	this.instance_15._off = true;

	this.instance_16 = new lib.stats_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(61.65,50.05,0.5604,0.5608,0,0,0,39.4,45.1);
	this.instance_16._off = true;

	this.stats_1 = new lib.stats_1();
	this.stats_1.name = "stats_1";
	this.stats_1.parent = this;
	this.stats_1.setTransform(-40.35,76.75,0.6606,0.6606,0,0,0,39.3,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_13}]},23).to({state:[{t:this.instance_13}]},24).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},23).to({state:[{t:this.instance_14}]},24).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},23).to({state:[{t:this.instance_15}]},24).to({state:[{t:this.instance_15}]},23).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.stats_1}]},23).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(23).to({scaleX:1.0037,scaleY:1.0058,x:-40,y:60.15},24,cjs.Ease.quartInOut).to({_off:true,regX:39.4,regY:45,scaleX:0.5572,scaleY:0.5575,x:63.55,y:50.15},1).wait(143));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(47).to({_off:false},1).wait(23).to({scaleX:0.6684,scaleY:0.669,x:-40.95,y:76.45},24,cjs.Ease.quartInOut).to({_off:true,regX:16.1,regY:13.6,scaleX:0.8378,scaleY:0.8383,x:63.55,y:36.45},1).wait(95));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(95).to({_off:false},1).wait(23).to({regX:16,scaleX:1.0048,scaleY:1.0059,x:-40.4,y:60.05},24,cjs.Ease.quartInOut).wait(23).to({_off:true,regX:39.4,regY:45.1,scaleX:0.5604,scaleY:0.5608,x:61.65,y:50.05},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(166).to({_off:false},1).to({_off:true,regX:39.3,regY:44.9,scaleX:0.6606,scaleY:0.6606,x:-40.35,y:76.75},23,cjs.Ease.quartInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.6,0,266.4,142.9);


(lib.Scene_1_rocketship = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rocketship
	this.rocket = new lib.rocketship();
	this.rocket.name = "rocket";
	this.rocket.parent = this;
	this.rocket.setTransform(80.5,639.5,0.6031,0.6031,-49.1795,0,0,27.4,24.2);
	this.rocket._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rocket).wait(139).to({_off:false},0).to({y:507},24,cjs.Ease.quartInOut).to({y:504},140).to({y:-101.75},24,cjs.Ease.quartIn).wait(8));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_planet_mars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// planet_mars
	this.planet = new lib.planet_1();
	this.planet.name = "planet";
	this.planet.parent = this;
	this.planet.setTransform(80.8,490.45,1.0954,1.0954,0,0,0,63,64.3);
	this.planet.alpha = 0;
	this.planet._off = true;

	this.timeline.addTween(cjs.Tween.get(this.planet).wait(23).to({_off:false},0).to({regX:62.9,regY:64.5,scaleX:1.3251,scaleY:1.325,x:77.85,y:300.45,alpha:1},23,cjs.Ease.quartInOut).wait(262).to({regX:63,regY:64.3,scaleX:1.0954,scaleY:1.0954,x:80.8,y:490.45,alpha:0},24,cjs.Ease.quartInOut).wait(3));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.safemars160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.cta3 = this.cta_3.cta3;
		this.cta3.addEventListener('click',onclickFunction3);
		
		
		function onclickFunction3()
		{
		
			window.open(window.clickTag1, '_blank')
		
		}
	}
	this.frame_23 = function() {
		this.planet = this.planet_mars.planet;
	}
	this.frame_46 = function() {
		this.planet = undefined;this.planet = this.planet_mars.planet;
	}
	this.frame_139 = function() {
		this.rocket = this.rocketship.rocket;
	}
	this.frame_142 = function() {
		this.cta2 = this.cta_2.cta2;
		this.cta1 = this.cta_1.cta1;
		this.cta2.addEventListener('click',onclickFunction2);
		
		
		function onclickFunction2()
		{
		
			window.open(window.clickTag2, '_blank')
		
		}
		this.cta1.addEventListener('click',onclickFunction1);
		
		
		function onclickFunction1()
		{
		
			window.open(window.clickTag1, '_blank')
		
		}
	}
	this.frame_163 = function() {
		this.rocket = undefined;this.rocket = this.rocketship.rocket;
	}
	this.frame_166 = function() {
		this.cta1 = undefined;this.cta2 = undefined;this.cta2 = this.cta_2.cta2;
		this.cta1 = this.cta_1.cta1;
	}
	this.frame_287 = function() {
		if (!this.looped) this.looped = 1;
		
		
		
		if (this.looped++ > 1) this.stop();this.planet.stop();this.rocket.stop();
	}
	this.frame_303 = function() {
		this.rocket = undefined;this.rocket = this.rocketship.rocket;
	}
	this.frame_306 = function() {
		this.cta1 = undefined;this.cta2 = undefined;this.cta2 = this.cta_2.cta2;
		this.cta1 = this.cta_1.cta1;
	}
	this.frame_308 = function() {
		this.planet = undefined;this.planet = this.planet_mars.planet;
	}
	this.frame_327 = function() {
		this.rocket = undefined;this.rocket = this.rocketship.rocket;
	}
	this.frame_330 = function() {
		this.cta1 = undefined;this.cta2 = undefined;this.cta2 = this.cta_2.cta2;
		this.cta1 = this.cta_1.cta1;
	}
	this.frame_332 = function() {
		this.planet = undefined;this.planet = this.planet_mars.planet;
	}
	this.frame_334 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(23).call(this.frame_46).wait(93).call(this.frame_139).wait(3).call(this.frame_142).wait(21).call(this.frame_163).wait(3).call(this.frame_166).wait(121).call(this.frame_287).wait(16).call(this.frame_303).wait(3).call(this.frame_306).wait(2).call(this.frame_308).wait(19).call(this.frame_327).wait(3).call(this.frame_330).wait(2).call(this.frame_332).wait(2).call(this.frame_334).wait(1));

	// cta_2_obj_
	this.cta_2 = new lib.Scene_1_cta_2();
	this.cta_2.name = "cta_2";
	this.cta_2.parent = this;
	this.cta_2.depth = 0;
	this.cta_2.isAttachedToCamera = 0
	this.cta_2.isAttachedToMask = 0
	this.cta_2.layerDepth = 0
	this.cta_2.layerIndex = 0
	this.cta_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cta_2).wait(335));

	// cta_1_obj_
	this.cta_1 = new lib.Scene_1_cta_1();
	this.cta_1.name = "cta_1";
	this.cta_1.parent = this;
	this.cta_1.depth = 0;
	this.cta_1.isAttachedToCamera = 0
	this.cta_1.isAttachedToMask = 0
	this.cta_1.layerDepth = 0
	this.cta_1.layerIndex = 1
	this.cta_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cta_1).wait(335));

	// cta_3_obj_
	this.cta_3 = new lib.Scene_1_cta_3();
	this.cta_3.name = "cta_3";
	this.cta_3.parent = this;
	this.cta_3.setTransform(79.2,305.3,1,1,0,0,0,79.2,305.3);
	this.cta_3.depth = 0;
	this.cta_3.isAttachedToCamera = 0
	this.cta_3.isAttachedToMask = 0
	this.cta_3.layerDepth = 0
	this.cta_3.layerIndex = 2
	this.cta_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cta_3).wait(335));

	// logo_obj_
	this.logo = new lib.Scene_1_logo();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(80,281.2,1,1,0,0,0,80,281.2);
	this.logo.depth = 0;
	this.logo.isAttachedToCamera = 0
	this.logo.isAttachedToMask = 0
	this.logo.layerDepth = 0
	this.logo.layerIndex = 3
	this.logo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(335));

	// text_obj_
	this.text = new lib.Scene_1_text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.depth = 0;
	this.text.isAttachedToCamera = 0
	this.text.isAttachedToMask = 0
	this.text.layerDepth = 0
	this.text.layerIndex = 4
	this.text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text).wait(335));

	// planet_mars_obj_
	this.planet_mars = new lib.Scene_1_planet_mars();
	this.planet_mars.name = "planet_mars";
	this.planet_mars.parent = this;
	this.planet_mars.depth = 0;
	this.planet_mars.isAttachedToCamera = 0
	this.planet_mars.isAttachedToMask = 0
	this.planet_mars.layerDepth = 0
	this.planet_mars.layerIndex = 5
	this.planet_mars.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.planet_mars).wait(335));

	// rocketship_obj_
	this.rocketship = new lib.Scene_1_rocketship();
	this.rocketship.name = "rocketship";
	this.rocketship.parent = this;
	this.rocketship.depth = 0;
	this.rocketship.isAttachedToCamera = 0
	this.rocketship.isAttachedToMask = 0
	this.rocketship.layerDepth = 0
	this.rocketship.layerIndex = 6
	this.rocketship.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.rocketship).wait(335));

	// bg_obj_
	this.bg = new lib.Scene_1_bg();
	this.bg.name = "bg";
	this.bg.parent = this;
	this.bg.setTransform(84.2,302.9,1,1,0,0,0,84.2,302.9);
	this.bg.depth = 0;
	this.bg.isAttachedToCamera = 0
	this.bg.isAttachedToMask = 0
	this.bg.layerDepth = 0
	this.bg.layerIndex = 7
	this.bg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(335));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,176.3,269.4,511.40000000000003);
// library properties:
lib.properties = {
	id: '888BEB9A8AB1C3409FBE9ED694EC12C2',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/safemars_160x600_atlas_.png", id:"safemars_160x600_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['888BEB9A8AB1C3409FBE9ED694EC12C2'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;