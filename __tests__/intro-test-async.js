import React from 'react';
import renderer from 'react-test-renderer';
import MyScreenAsync from '../src/practice/MyScreenAsync';

const tree = renderer.create(< MyScreenAsync/>)
// jest.runAllTimers();
test('snapshot',()=>{
    expect(tree).toMatchSnapshot();
})
test('call timeout',()=>{
    renderer.act(()=>jest.runAllTimers())
    const text=tree.root.findByProps({testID:'myText'}).props;
    expect(text.children).toEqual('timeout is called');
})