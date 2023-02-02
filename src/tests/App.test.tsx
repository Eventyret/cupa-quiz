import renderer from "react-test-renderer";

import App from "../App";

jest.mock("react-router-dom");
jest.mock("../App.css");
jest.mock("../pages/HomeScreen/HomeScreen");
jest.mock("../pages/Quiz/Quiz");

const renderTree = (tree: any) => renderer.create(tree);
describe("<App>", () => {
  it("should render component", () => {
    expect(renderTree(<App />).toJSON()).toMatchSnapshot();
  });
});
