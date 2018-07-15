const localStorageMock = (() => {
  let store = {}
  return {
    getItem(key) {
      return store[key]
    },
    setItem(key, value) {
      store[key] = value.toString()
    },
    removeItem(key, value) {
      store[key] = undefined;
    },
    clear() {
      store = {}
    }
  };
})()

global.localStorage = localStorageMock;
window.localStorage = localStorageMock;