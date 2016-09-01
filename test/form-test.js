var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var Provider = require('react-redux').Provider;
var store = require('../dev/js/store.js');
var Form = require('../dev/js/form.js');

describe('Form Component', function() {
    it.only('It should render a Form',  function() {
        var renderer = TestUtils.createRenderer();
        renderer.render(<Form />);
        var result = renderer.getRenderOutput();
        console.log(result.props.children.props.children);
        result.type.should.equal('div');
        result.props.children.type.should.equal('form');
        result.props.children.props.children.length.should.equal(2);
        result.props.children.props.children[0].type.should.equal('input');
        result.props.children.props.children[1].type.should.equal('button');
    });
});