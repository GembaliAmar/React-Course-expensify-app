console.log("utils.js is running");

export const square = (x) => x * x;

export const add = (a, b) => a + b;

//default export
const substract = (a, b) => a - b;
export default substract;
// export { square, add, substract as default };
//export { square, add };
//exports - 1-default export,2-named exports
