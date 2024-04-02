export function asyncWapper(cb) {
  return async () => {
    try {
      await cb();
    } catch (error) {
      console.log(error);
    }
  };
}
