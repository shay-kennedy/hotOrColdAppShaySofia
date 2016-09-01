var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var NewGame = require('../dev/js/newGame.js');

describe('NewGame Component', function() {
    it('It should start newGame on button clicked',  function() {

        var renderer = TestUtils.createRenderer();
        renderer.render(<NewGame newGame={this.restartGame} />);
        var result = renderer.getRenderOutput();
        // console.log(result);
        result.type.should.equal('div');
        result.props.children.props.type.should.equal('button');
        result.props.children.props.value.should.equal('New Game') 
    });
});