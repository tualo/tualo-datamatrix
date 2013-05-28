// Sample Text
var Datamatrix = require('./lib/datamatrix').Datamatrix;
var dm = new Datamatrix();
var ascii = dm.getDigit('http://tualo.de',false);
console.log(ascii);
