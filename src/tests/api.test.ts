import { getQuestions } from "../helpers/api";

jest.mock("../helpers/helpers");
jest.mock("../helpers/types");

describe("getQuestions", () => {
  it("should expose a function", () => {
    expect(getQuestions).toBeDefined();
  });
});
