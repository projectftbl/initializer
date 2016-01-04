var should = require('chai').should();

var sut = function() {
  return require('../lib')('incept', __dirname + '/initializers').apply(null, arguments);
};

describe('Initializer', function() {
		
  before(function() {
    this.arguments = sut('test', 'one', 2);
  });
    
  it('should call test initializer', function() {
    this.arguments.should.exist;
  });
    
  it('should return arguments', function() {
    this.arguments.length.should.equal(2);
  });
    
  it('should return correct arguments', function() {
    this.arguments[0].should.equal('one');
    this.arguments[1].should.equal(2);
  });
	
});
