export const useLocalStorage = () => {
  function set(key: string, value: string) {
    if (process.client) localStorage.setItem(key, value);
  }
  function get(key: string) {
    if (process.client) return localStorage.getItem(key);
  }
  function remove(key: string) {
    if (process.client) localStorage.removeItem(key);
  }
  return {
    set,
    get,
    remove,
  };
};
