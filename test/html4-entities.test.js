require('chai').should();
var htmlEntities = require('..');
var html4Entities = new htmlEntities.Html4Entities();

describe('html4 entities', function () {
    it('should encode html4 entities', function () {
        html4Entities.encode('').should.equal('');
        html4Entities.encode('<>"&').should.equal('&lt;&gt;&quot;&amp;');
        html4Entities.encode('<>"&©').should.equal('&lt;&gt;&quot;&amp;&copy;');
        html4Entities.encodeNonUTF('').should.equal('');
        html4Entities.encodeNonUTF('<>"&©∆').should.equal('&lt;&gt;&quot;&amp;&copy;&#8710;');
        html4Entities.encodeNonASCII('').should.equal('');
        html4Entities.encodeNonASCII('<>"&©®∆').should.equal('<>"&©®&#8710;');
    });
    it('should decode html4 entities', function () {
        html4Entities.decode('').should.equal('');
        html4Entities.decode('&lt;&gt;&quot;&amp;').should.equal('<>"&');
        html4Entities.decode('&lt;&gt;&quot;&amp;&acE;&copy;').should.equal('<>"&&acE;©');
        html4Entities.decode('&#60;&#x3C;').should.equal('<<');
    });
});
