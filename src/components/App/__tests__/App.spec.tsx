import * as React from "react";
import * as sinon from "sinon";
import { MemoryRouter } from "react-router";
import { shallow, mount } from "enzyme";

// Components
import App from "../App";

describe("App", () => {
  it("renders without crashing", () => {
    expect(() => shallow(<App history={{}} />)).not.toThrow();
  });
});
