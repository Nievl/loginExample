import { dataSetExtractor, valueExtractor } from "./extractors";

const event = {
  target: {
    dataset: {
      222: "kles",
      555: "dhshdhewdl;ew",
      666: 321731823,
    },
    222: {
      type: "text",
      value: "kles",
    },
    555: {
      type: "text",
      value: "",
    },
    666: {
      type: "number",
      value: "321731823",
    },
    777: {
      type: "checkbox",
      checked: true,
    },
  },
};

// const wrapper = (descr, names, exp) => {
//   it(descr, () => {
//     const result = dataSetExtractor(event.target, names);
//     expect(result).toBe(exp);
//   });
// };

describe("Data set extractors test", () => {
  it("should return empty string", () => {
    const result = dataSetExtractor(event.target, "111");
    expect(result).toBe("");
  });
  it("should return `kles` ", () => {
    const result = dataSetExtractor(event.target, "222");
    expect(result).toBe("kles");
  });
  it("should return object", () => {
    const result = JSON.stringify(dataSetExtractor(event.target, ["333"]));
    expect(result).toBe("{}");
  });
  it("should return object", () => {
    const result = JSON.stringify(dataSetExtractor(event.target, ["333", "555", "666"]));
    expect(result).toBe(`{"555":"dhshdhewdl;ew","666":321731823}`);
  });
  it("should return object", () => {
    const result = JSON.stringify(dataSetExtractor(event.target, {}));
    expect(result).toBe(`{}`);
  });
  it("should return object", () => {
    const result = JSON.stringify(dataSetExtractor(event.target, undefined));
    expect(result).toBe(`{}`);
  });
  it("should return object", () => {
    const result = JSON.stringify(dataSetExtractor(event.target, null));
    expect(result).toBe(`{}`);
  });
  it("should return object", () => {
    const result = JSON.stringify(dataSetExtractor({}, null));
    expect(result).toBe(`{}`);
  });
});

describe("value extractor", () => {
  it("should return value", () => {
    const result = valueExtractor(event.target, "222");
    expect(result).toBe("kles");
  });
  it("should return value", () => {
    const result = valueExtractor(event.target, "333");
    expect(result).toBe("");
  });
  it("should return value", () => {
    const result = JSON.stringify(valueExtractor(event.target, ["222", "555", "666", "777"]));
    expect(result).toBe(`{"222":"kles","555":"","666":"321731823","777":true}`);
  });
  it("should return value", () => {
    const result = valueExtractor(event.target, null);
    expect(result).toBe("");
  });
  it("should return value", () => {
    const result = valueExtractor(null, null);
    expect(result).toBe("");
  });
});
