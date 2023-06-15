// Your custom Reduce
const reduce = (arr, fn, initialValue) => {
  let sum= initialValue
  
    arr.forEach(element => {
        sum += fn(initialValue, element);
    });

    return sum;
  };
  
  // Inputs
  const arr = [1, 2, 3, 4];
  const sum = (accumulator, val) => accumulator + val;
  const initialValue = 0;
  
  // Generating the Sums
  const sum01 = arr.reduce(sum, initialValue); // Plain JS Reduce
  const sum02 = reduce(arr, sum, initialValue); // Custom Reduce
  
  // Logging
  console.log({ sum01, sum02 });
  
  // Assertions
  console.assert(sum01 === sum02, "Sum01 does not match Sum02");
  console.assert(
    JSON.stringify(arr) === JSON.stringify([1, 2, 3, 4]),
    "Array should not be mutated"
  );
  console.assert(initialValue === 0, "Initial value should not be mutated");