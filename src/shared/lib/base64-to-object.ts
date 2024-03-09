export const base64ToObject = <Data>(base64String: string): Data => {
  return JSON.parse(atob(base64String));
};
