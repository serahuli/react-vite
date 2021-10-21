/**
 * @description: 随机抽取下标
 * @param {*} number
 * @return {*}
 */
export const randomIndex: (length: number) => number = (length) => {
  let index: number;
  index = Math.floor(Math.random() * length);
  return index;
};
