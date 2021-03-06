//     mp3-parser test suite: Preliminary sanity checks & misc.

//     https://github.com/biril/mp3-parser
//     Licensed and freely distributed under the MIT License
//     Copyright (c) 2013 Alex Lambiris

/*jshint node:true */
/*global describe, beforeEach, it, expect  */
"use strict";

describe("mp3 parser", function () {

    var mp3Parser = require(__dirname + "/../../mp3-parser.js");

    // beforeEach(function () { });

    it("should be exported", function() {
        expect(mp3Parser).toBeDefined();
    });

    it("should report its version", function() {
        expect(mp3Parser.version).toMatch(/^\d+\.\d+\.\d+$/);
    });

});