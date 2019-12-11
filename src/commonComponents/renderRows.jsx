import React from "react";

export const renderInputRows = (template = []) =>
  template.map(label => {
    const { name, type, value, clN, required, autoComp, title } = label;
    const checked = type === "checkbox" && value;
    if (type) {
      return (
        <label key={title}>
          <div>{title}</div>
          <input
            defaultValue={value}
            type={type}
            defaultChecked={checked}
            name={name}
            className={clN || "form-control"}
            required={required}
            autoComplete={autoComp}
          />
        </label>
      );
    }
    return (
      <label key={title}>
        <div>{title}</div>
        <div className={`value ${clN}`}>{value}</div>
      </label>
    );
  });

export const example = 5;
