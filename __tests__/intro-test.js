import React from 'react';
import renderer from 'react-test-renderer';
import MyScreen from '../src/practice/MyScreen';

const tree = renderer.create(< MyScreen/>)


test('button press',()=>{
    const button=tree.root.findByProps({testID:'myButton'}).props;
    renderer.act(()=>button.onPress());
    const text=tree.root.findByProps({testID:'myText'}).props;
    expect(text.children).toEqual('button pressed');
    expect(tree).toMatchSnapshot()
})