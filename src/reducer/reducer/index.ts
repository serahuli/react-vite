import { combineReducers } from 'redux';
import Test from './test';

//合并多个reducer 具体是否用 combineReducers 方法随自己需求而定，采用combineReducers 合并时，在调用action方法时，combineReducers中的所有计算方法都会触发，因此需要注意计算方法中判断条件！
const allReducers = combineReducers({
  test: Test
});

export default allReducers;
