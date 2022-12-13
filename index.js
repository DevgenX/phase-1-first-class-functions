const receivesAFunction = (cb) => cb();

const returnsANamedFunction = () =>
  function NamedFunction() {
    console.log("Named function");
  };

// const returnsAnAnonymousFunction = () => {
//   return () => {
//     console.log("This is an anonymous function");
//   };
// };

const returnsAnAnonymousFunction = () => () => {
  console.log("This is an anonymous function");
};
