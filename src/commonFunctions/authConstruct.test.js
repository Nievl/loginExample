import { authConstruct } from "./authConstruct";

describe("Name of the group", () => {
  it("should ", () => {
    const example = "eXampl@#$^&0594";
    authConstruct.add(example);
    let result = authConstruct.get();
    expect(result).toBe(example);
    authConstruct.remove()
    result = authConstruct.get();
    expect(result).toBe(null);    
  });
});
