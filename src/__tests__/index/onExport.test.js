import { onExport } from "../../index";

Date.now = jest.fn(() => 1534939718031);

describe("onExport()", () => {
  it("should returns exported result", () => {
    const project = {
      pluginID: "gattigaga-laravel",
      name: "myproject",
      zoom: 100,
      timestamp: Date.now()
    };

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

    const relations = [
      {
        id: expect.any(String),
        fieldID: postFields[0].id,
        fromTableID: postFields[0].tableID,
        toTableID: tables[0].id
      }
    ];

    const destinationPath = "/exported";

    const data = {
      project,
      tables,
      fields,
      relations
    };

    const result = onExport(destinationPath, data);

    expect(result).toMatchSnapshot();
  });
});
