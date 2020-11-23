import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

// MUI and Jest don't play well
// https://stackoverflow.com/questions/58070996/how-to-fix-the-warning-uselayouteffect-does-nothing-on-the-server
React.useLayoutEffect = React.useEffect;
configure({ adapter: new Adapter() });
