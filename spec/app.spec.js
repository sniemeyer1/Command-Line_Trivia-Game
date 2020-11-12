const getQuestionData = require('../app.js');
const assert = require('assert');

describe("get question data", function(){
   it("returns an object", function(){
      let result = getQuestionData();
      assert.strictEqual(typeof result, "object");
   });
   it("takes a string and returns an object", function(){
      assert.strictEqual(typeof getQuestionData(), "object");
   });
});