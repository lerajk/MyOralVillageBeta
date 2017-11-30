//testing a test
//good tutorial: https://gist.github.com/soheilhy/867f76feea7cab4f8a84

var assert = require('assert');

//file-add-form.ts
var calc = require('../pages/file-manage/file-add-form.ts');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

/*
// Tests are hierarchical. Here we define a test suite for our calculator.
describe('Testing', function() {
	// And then we describe our testcases.
	it('returns "tag successful"', function(done) {
		assert.equal(calc.addTags(1, 1), 2);
		// Invoke done when the test is complete.
		done();
	});

});
*/

describe('Testing', function() {
  describe('#addTags())', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      user.save(function(err) {
        if (err) done(err);
        else done();
      });
    });
  });
});