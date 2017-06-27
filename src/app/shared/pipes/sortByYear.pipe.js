"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TestPipe = (function () {
    function TestPipe() {
    }
    TestPipe.prototype.transform = function (value, args) {
        if (!value) {
            return [];
        }
        var result = [];
        var sorterObject = Object.keys(value)
            .sort()
            .reduce(function (r, k) {
            return (__assign({}, r, (_a = {}, _a[k] = value[k], _a)));
            var _a;
        }, {});
        for (var prop in sorterObject) {
            if (sorterObject.hasOwnProperty(prop)) {
                result.unshift(sorterObject[prop]);
            }
        }
        if (!result.length) {
            return [];
        }
        return result;
    };
    return TestPipe;
}());
TestPipe = __decorate([
    core_1.Pipe({
        name: 'test'
    })
], TestPipe);
exports.TestPipe = TestPipe;
