import checkJest from "./check_jest";

describe("test using jest for first time", () => {
  test("Just return hoge.",
    () => {
      expect(checkJest()).toBe("hoge");
    });
});
