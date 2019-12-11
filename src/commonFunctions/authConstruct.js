export const authConstruct = {
  add(token) {
    window.localStorage.setItem("token", token);
  },
  remove() {
    window.localStorage.removeItem("token");
  },
  get: () => window.localStorage.getItem("token"),
};

export const example = 1;
