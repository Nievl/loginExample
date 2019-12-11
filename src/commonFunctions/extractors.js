export const valueExtractor = (target, names) => {
  if (Array.isArray(names)) {
    const result = names.reduce((accum, element) => {
      if (target[element]) {
        const value = target[element].type === "checkbox" ? target[element].checked : target[element].value.trim();
        return { ...accum, [element]: value };
      }
      return accum;
    }, {});
    return result;
  }
  if (typeof names === "string") {
    if (target[names]) {
      return target[names].type === "checkbox" ? target[names].checked : target[names].value.trim();
    }
  }
  return "";
};

export const dataSetExtractor = ({ dataset } = {}, names) => {
  if (Array.isArray(names)) {
    const result = names.reduce((accum, element) => (dataset[element] ? { ...accum, [element]: dataset[element] } : accum), {});
    return result;
  }
  if (typeof names === "string") {
    return dataset[names] || "";
  }
  return {};
};
