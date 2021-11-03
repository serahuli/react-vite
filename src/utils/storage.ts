type IAllType = string | number | boolean | null | undefined | { [props: string]: string };

const originalSetItem = sessionStorage.setItem;
sessionStorage.setItem = function (key, newValue) {
  const setItemEvent = new Event('setItemEvent');
  (setItemEvent as Event & { newValue: string }).newValue = newValue;
  window.dispatchEvent(setItemEvent);
  originalSetItem.apply(this, arguments as unknown as [key: string, value: string]);
};

export const setStorage = (
  key: string,
  value: IAllType | IAllType[],
  type?: 'session' | 'locale'
) => {
  const setType = type ?? 'session';

  const valueString = JSON.stringify(value);

  setType === 'session' && sessionStorage.setItem(key, valueString);
  setType === 'locale' && localStorage.setItem(key, valueString);
};

export const getStorage = (key: string) => {
  if (sessionStorage.getItem(key) || localStorage.getItem(key)) {
    if ((sessionStorage.getItem(key) || localStorage.getItem(key)) === 'undefined') {
      return undefined;
    }
    return JSON.parse(sessionStorage.getItem(key) || (localStorage.getItem(key) as string));
  }
  return null;
};

export const removeStorage = (key: string) => {
  if (sessionStorage.getItem(key)) {
    sessionStorage.removeItem(key);
  }

  if (localStorage.getItem(key)) {
    localStorage.removeItem(key);
  }
};

export const clearStorage = () => {
  sessionStorage.clear();
  localStorage.clear();
};
