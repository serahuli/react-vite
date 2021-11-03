import { TestStore } from "@/types/store";
import testType from "../type/test";

const initialTestState: TestStore = {
  testStr: 'react',
  testNumber: 1
};

export default function test(state = initialTestState, action) {
  switch (action.type) {
    case testType.CHANGE_NUMBER:
      return { ...state, ...{ testNumber: action.data } }
    case testType.CHANGE_TEXT:
      return { ...state, ...{ testStr: action.data} }
    default:
      return state
  }
}