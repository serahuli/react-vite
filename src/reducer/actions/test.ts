import test from '../type/test';

export function changeText(text: string) {
  return { type: test.CHANGE_TEXT, text };
}

export function changeNumber(number: number) {
  return { type: test.CHANGE_NUMBER, number };
}
