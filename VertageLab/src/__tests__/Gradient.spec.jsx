import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Gradient from "../components/Gradient";
import { MemoryRouter as Router } from "react-router-dom";
import { AppProviders } from "../context/AppContext";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
}));

const mockGradient = { id: "1", first: "#000", second: "#fff" };
const mockDeleteGradient = jest.fn();

jest.mock("../context/AppContext", () => ({
  ...jest.requireActual("../context/AppContext"),
  useDeleteGradient: () => mockDeleteGradient,
}));

test("Gradient should render correct", async () => {
  render(
    <Router>
      <Gradient gradient={mockGradient} key={mockGradient.id} />
    </Router>,
    {
      wrapper: AppProviders,
    }
  );
  mockDeleteGradient.mockImplementation(() => Promise.resolve(mockGradient));

  userEvent.type(screen.getByTestId(/firstInput/i), mockGradient.first);
  userEvent.type(screen.getByTestId(/secondInput/i), mockGradient.second);

  const btnEl = screen.getByText(/Delete/i);
  fireEvent.click(btnEl);
  expect(mockDeleteGradient).toHaveBeenCalledTimes(1);
  expect(mockDeleteGradient).toHaveBeenCalledWith(mockGradient);
});
