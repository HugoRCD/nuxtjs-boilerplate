export const useLocalStorage = () => {
  function set(key, value) {
    localStorage.setItem(key, value);
  }
  function get(key) {
    return localStorage.getItem(key);
  }
  function remove(key) {
    localStorage.removeItem(key);
  }
  return {
    set,
    get,
    remove,
  };
};
