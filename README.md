Description
===========

tualo-datamatrix is a small and simple datamatrix library written in javascript.
This library creates simple text representation of the datamatrix for the given string.

Requirements
============

* [node.js](http://nodejs.org/) -- v0.8.0 or newer


Installation
============

    npm install tualo-datamatrix

How to Use
==========

    var Datamatrix = require('tualo-datamatrix');
    var dm = new Datamatrix();
    var ascii = dm.getDigit('http://tualo.de',false);
    console.log(ascii);
    
The output will be:

    00000000000000000000
    01010101010101010100
    01011011100010110010
    01110000011011011000
    01101111011110000110
    01100011110100011000
    01111001000000010010
    01000010100101000000
    01100110101110011110
    01001001110000001000
    01010100100010111110
    01110011101111110100
    01110011100101110110
    01010111001000011100
    01100000111001001010
    01101001010111010000
    01000111101101101110
    01001100110110001000
    01111111111111111110
    00000000000000000000

