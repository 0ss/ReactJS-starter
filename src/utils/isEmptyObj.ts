export const isEmptyObj = (obj: Object) => {
  for (const i in obj) {
    return false;
  }
  return true;
};
