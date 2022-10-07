class KeyValyePair<k, v> {
  constructor(public key: k, public value: v) {}
}

let keyvalue = new KeyValyePair<number, string>(1, "a");
console.log(keyvalue.value);
