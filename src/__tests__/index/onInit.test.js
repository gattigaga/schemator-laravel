import { onInit } from "../../index";

Date.now = jest.fn(() => "1534939718031");

describe("onInit()", () => {
  it("should returns initial scheme", () => {
    const tables = [
      {
        id: expect.any(String),
        name: "User",
        options: [
          {
            id: "id",
            label: "ID",
            isChecked: true
          },
          {
            id: "rememberToken",
            label: "Remember Token",
            isChecked: true
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
        position: { x: 128, y: 128 },
        timestamp: Date.now()
      }
    ];

    const fields = [
      {
        id: expect.any(String),
        tableID: tables[0].id,
        name: "name",
        type: "string"
      },
      {
        id: expect.any(String),
        tableID: tables[0].id,
        name: "email",
        type: "string"
      },
      {
        id: expect.any(String),
        tableID: tables[0].id,
        name: "password",
        type: "text"
      }
    ];

    const expected = {
      tables,
      fields
    };

    const result = onInit();

    expect(result).toEqual(expected);
  });
});
