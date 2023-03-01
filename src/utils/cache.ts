export const setCache = (key: string, value: any) => {
  if (value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const sgetCache = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
};

export const deleteCache = (key: string) => {
  localStorage.removeItem(key);
};

export const clearCache = () => {
  localStorage.clear();
};
