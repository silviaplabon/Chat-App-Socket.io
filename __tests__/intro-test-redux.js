import React from 'react';
import MyScreenRedux from '../src/practice/MyScreenRedux';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './../src/practice/reducer';
import thunk from 'redux-thunk'
import renderer from 'react-test-renderer';
import MyScreenAsync from '../src/practice/MyScreenAsync';
const store=createStore(reducer,{status:'default status'},applyMiddleware(thunk))
const tree = renderer.create(
< Provider store={store}>
    <MyScreenRedux></MyScreenRedux>
</Provider>)
// jest.runAllTimers();
test('snapshot',()=>{
    expect(tree).toMatchSnapshot();
})


// jest.runAllTimers();
test('snapshot',()=>{
    expect(tree).toMatchSnapshot();
})
test('call timeout',()=>{
    renderer.act(()=>jest.runAllTimers())
    const text=tree.root.findByProps({testID:'myText'}).props;
    expect(text.children).toEqual('timeout is called');
})
 

test('status stored properly',()=>{
    expect(store.getState().status).toEqual('timeout is called')
})