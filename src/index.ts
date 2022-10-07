interface Product {
  name: string;
  price: number;
}

type ReadOnly<T> = {
  readonly //index Signature
  //keyof
  [Property in keyof T]: T[Property];
};

type Optional<T> = {
  [Property in keyof T]?: T[Property];
};

let product: ReadOnly<Product> = {
  name: "a",
  price: 5,
};
