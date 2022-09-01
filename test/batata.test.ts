import { sum, printPerson } from "./batata";

type Person = {
  name: string;
  age: number;
};

describe("Batata", () => {
  it("should return the sum of two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("printando pessoa", () => {
    const person: Person = {
      name: "João",
      age: 20,
    };
    const getPerson = jest.fn().mockReturnValue(person);

    expect(printPerson(getPerson())).toBe(`{"name":"João","age":20}`);
  });
});
