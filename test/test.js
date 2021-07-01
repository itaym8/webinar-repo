//var assert = require('assert');
//var request = require('supertest');
//var app = require('../index.js');
//describe('GET /', function() {
// it('respond with Welcome To The Webinar ! :-)', function(done) {
// request(app).get('/').expect('Welcome To The Webinar ! :-)', done);
// });
//});
const assert = require('assert');
describe('Simple Math Test', () => {
 it('should return 2', () => {
        assert.equal(1 + 1, 2);
    });
 it('should return 9', () => {
        assert.equal(3 * 3, 9);
    });
});
