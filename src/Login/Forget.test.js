import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import Forget from "./Forget";

it("renders without crashing", () => {
  const wrapper = shallow(<Forget />);
  const input1 = wrapper.find(`input[name="email"]`);
  expect(input1).to.have.lengthOf(1);
  const input2 = wrapper.find(`input[name="login"]`);
  expect(input2).to.have.lengthOf(1);
  const props1 = input1.props();
  expect(props1.defaultValue).equal(undefined);
  const props2 = input2.props();
  expect(props2.defaultValue).equal(undefined);
});
