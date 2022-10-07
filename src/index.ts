function wrapInArray<T>(value: T) {
  return [value];
}

let numbersInteger = wrapInArray(1);
let numbersString = wrapInArray("e");
