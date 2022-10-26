import React from 'react'
// יוצר את הסטור ומחבר את כל הרדוסרס לאוביקט יחיד
import { createStore, combineReducers, } from 'redux';
import userReducer from './Reducers/userReducer';

const reducer = combineReducers({ userReducer });

const store = createStore(reducer);
window.store = store;
export default store;




