export function sum(a: number, b: number) {
  return a + b;
}

type Person = {
  name: string;
  age: number;
};

export function printPerson(person: Person) {
  return JSON.stringify(person);
}
