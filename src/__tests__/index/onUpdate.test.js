import { onUpdate } from "../../index";

Date.now = jest.fn(() => "1534939718031");

describe("onUpdate()", () => {
  it("should returns new relations", () => {
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
      },
      {
        id: expect.any(String),
        name: "Post",
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
        position: { x: 320, y: 320 },
        timestamp: Date.now()
      }
    ];

    const userFields = [
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

    const postFields = [
      {
        id: expect.any(String),
        tableID: tables[1].id,
        name: "user_id",
        type: "integer"
      },
      {
        id: expect.any(String),
        tableID: tables[1].id,
        name: "title",
        type: "string"
      }
    ];

    const fields = [...userFields, ...postFields];

    const data = {
      tables,
      fields
    };

    const expected = [
      {
        id: expect.any(String),
        fieldID: postFields[0].id,
        fromTableID: postFields[0].tableID,
        toTableID: tables[0].id
      }
    ];

    const result = onUpdate(data);

    expect(result).toEqual(expected);
  });

  it("should not returns new relations", () => {
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
      },
      {
        id: expect.any(String),
        name: "Post",
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
        position: { x: 320, y: 320 },
        timestamp: Date.now()
      }
    ];

    const userFields = [
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

    const postFields = [
      {
        id: expect.any(String),
        tableID: tables[1].id,
        name: "user_id_id",
        type: "integer"
      },
      {
        id: expect.any(String),
        tableID: tables[1].id,
        name: "title",
        type: "string"
      }
    ];

    const fields = [...userFields, ...postFields];

    const data = {
      tables,
      fields
    };

    const expected = [];

    const result = onUpdate(data);

    expect(result).toEqual(expected);
  });
});
