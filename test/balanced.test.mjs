// import chai from "chai";
// // const chai = require("chai")
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;


/// <reference path="/runner/typings/mocha/index.d.ts" />
/// <reference path="/runner/typings/chai/index.d.ts" />

import { part } from "./src/lib/part";
import { assert } from "chai";

describe("Fixed", function() {
    it("Tests1", function() {
        assert.equal(part(8), "Range: 17 Average: 8.29 Median: 7.50");
        assert.equal(part(9), "Range: 26 Average: 11.17 Median: 9.50");
        assert.equal(part(10), "Range: 35 Average: 15.00 Median: 14.00");
    });
});