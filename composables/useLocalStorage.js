export const useLocalStorage = () => {
  function set(key, value) {
    if (process.client) localStorage.setItem(key, value);
  }
  function get(key) {
    if (process.client) return localStorage.getItem(key);
  }
  function remove(key) {
    if (process.client) localStorage.removeItem(key);
  }
  return {
    set,
    get,
    remove,
  };
};
