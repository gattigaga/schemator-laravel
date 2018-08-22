import { onCreateField } from "../../index";

Date.now = jest.fn(() => "1534939718031");

describe("onInit()", () => {
  it("should returns new field", () => {
    const tableID = "1";
    const field = {
      id: expect.any(String),
      tableID,
      name: "field",
      type: "integer"
    };

    const expected = field;

    const result = onCreateField(tableID);

    expect(result).toEqual(expected);
  });
});
