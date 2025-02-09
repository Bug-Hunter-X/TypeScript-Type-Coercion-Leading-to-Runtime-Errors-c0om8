function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

const result1 = add(1, 2); // Correct usage
const result2 = isNumber("hello") ? add(Number("hello"), 2) : 0; // Using type guard
const result3 = add(parseInt("4"), 2); // Using parseInt

//Alternative solution
function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : 0;
  const numB = typeof b === 'number' ? b : 0;
  return numA + numB;
}
const result4 = addSafe("hello",2) //This will return 2; 