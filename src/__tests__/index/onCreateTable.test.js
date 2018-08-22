import { onCreateTable } from "../../index";

Date.now = jest.fn(() => "1534939718031");

describe("onCreateTable()", () => {
  it("should returns new table with it's fields", () => {
    const position = {
      x: 64,
      y: 64
    };

    const table = {
      id: expect.any(String),
      name: "Table",
      options: [
        {
          id: "id",
          label: "ID",
          isChecked: true
        },
        {
          id: "rememberToken",
          label: "Remember Token",
          isChecked: false
        },
        {
          id: "softDeletes",
          label: "Soft Deletes",
          isChecked: false
        },
        {
          id: "timestamps",
          label: "Timestamps",
          isChecked: true
        }
      ],
      position,
      timestamp: Date.now()
    };

    const fields = [
      {
        id: expect.any(String),
        tableID: table.id,
        name: "field",
        type: "integer"
      }
    ];

    const expected = {
      table,
      fields
    };

    const result = onCreateTable(position);

    expect(result).toEqual(expected);
  });
});
