function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

const writeToLocalStorage = (key, value) => {
  if (
    !storageAvailable('localStorage') ||
    !key ||
    !value ||
    !value.length ||
    !key.length ||
    !(key instanceof String) ||
    !(value instanceof String)
  ) {
    return false;
  }

  window.localStorage.setItem(key, value);

  return true;
};

const writeToStorage = (key, value) => writeToLocalStorage(key, value);

const readFromLocalStorage = (key) => {
  if (
    !storageAvailable('localStorage') ||
    !key ||
    !key.length ||
    !(key instanceof String)
  ) {
    return null;
  }

  return window.localStorage.getItem(key);
};

const readFromStorage = (key) => readFromLocalStorage(key);

export { writeToStorage, readFromStorage };
