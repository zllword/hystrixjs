var sinon = require("sinon");
var q = require('q');

module.exports = {
    fastForwardActualTime: function fastForward(constructorFn, milliseconds) {
        var actualTimeStub = sinon.stub().returns(Date.now() + milliseconds);
        var actualTime = {
            "getCurrentTime": actualTimeStub
        };
        constructorFn.__set__("_utilActualTime2", {
            "default": actualTime
        });
    },
    failTest: function (doneCallback) {
        return function (value) {
            expect('The promise').toBe('in the opposite state');
            expect(JSON.stringify(arguments)).toBeFalsy();
            if (value) {
                expect(value.message).toBeFalsy('value.message');
                expect(value.stack).toBeFalsy('value.stack');
            }

            doneCallback();
            return q.reject();
        };
    }
};